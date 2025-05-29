const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');
const { gerarAccessToken, gerarRefreshToken, verificarToken } = require('../tokenUtils');

const authController = {
  async login(req, res) {
    const { email, senha } = req.body;

    const cliente = await prisma.clientes.findUnique({ where: { Email_cli: email } });
    if (!cliente || !(await bcrypt.compare(senha, cliente.Senha_cli))) {
      return res.status(401).json({ erro: 'Email ou senha inválidos' });
    }

    const payload = { id: cliente.ID_cli, email: cliente.Email_cli };
    const accessToken = gerarAccessToken(payload);
    const refreshToken = gerarRefreshToken(payload);

    await prisma.sessao.create({
      data: {
        token: refreshToken,
        ip: req.ip,
        userAgent: req.headers['user-agent'],
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        clienteId: cliente.ID_cli,
      },
    });

    res
      .cookie('accessToken', accessToken, { httpOnly: true, maxAge: 15 * 60 * 1000 })
      .cookie('refreshToken', refreshToken, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 })
      .status(200)
      .json({ mensagem: 'Login realizado com sucesso' });
  },

  async logout(req, res) {
    const refreshToken = req.cookies.refreshToken;
    await prisma.sessao.deleteMany({ where: { token: refreshToken, clienteId: req.user.id } });

    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');
    res.json({ mensagem: 'Logout efetuado' });
  },

  async refresh(req, res) {
    const { refreshToken } = req.cookies;

    const sessao = await prisma.sessao.findUnique({ where: { token: refreshToken } });
    if (!sessao) return res.status(403).json({ erro: 'Sessão inválida' });

    try {
      const payload = verificarToken(refreshToken, true);
      const novoAccessToken = gerarAccessToken({ id: payload.id, email: payload.email });

      res.cookie('accessToken', novoAccessToken, { httpOnly: true, maxAge: 15 * 60 * 1000 });
      res.json({ mensagem: 'Token renovado' });
    } catch (err) {
      res.status(403).json({ erro: 'RefreshToken expirado ou inválido' });
    }
  },

  async listarSessoes(req, res) {
    const sessoes = await prisma.sessao.findMany({ where: { clienteId: req.user.id } });
    res.json(sessoes);
  },

  async revogarSessao(req, res) {
    const { id } = req.params;
    const sessao = await prisma.sessao.findUnique({ where: { id: Number(id) } });

    if (!sessao || sessao.clienteId !== req.user.id) {
      return res.status(403).json({ erro: 'Sessão não autorizada' });
    }

    await prisma.sessao.delete({ where: { id: Number(id) } });
    res.json({ mensagem: 'Sessão revogada' });
  },
};

module.exports = authController;
