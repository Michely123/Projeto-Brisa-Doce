const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

const clienteController = {
  async registrar(req, res) {
    const { Nome_cli, Email_cli, Senha_cli, CPF_cli } = req.body;

    const clienteExistente = await prisma.clientes.findUnique({ where: { Email_cli } });
    if (clienteExistente) {
      return res.status(409).json({ erro: 'Email já está em uso' });
    }

    const hash = await bcrypt.hash(Senha_cli, 10);

    const novoCliente = await prisma.clientes.create({
      data: {
        Nome_cli,
        Email_cli,
        Senha_cli: hash,
        CPF_cli,
      },
    });

    res.status(201).json({ mensagem: 'Cliente registrado com sucesso', cliente: novoCliente });
  },

  async listar(req, res) {
    const clientes = await prisma.clientes.findMany({
      select: { ID_cli: true, Nome_cli: true, Email_cli: true, CPF_cli: true },
    });
    res.json(clientes);
  },

  async buscarPorId(req, res) {
    const { id } = req.params;
    const cliente = await prisma.clientes.findUnique({
      where: { ID_cli: parseInt(id) },
      select: { ID_cli: true, Nome_cli: true, Email_cli: true, CPF_cli: true },
    });

    if (!cliente) return res.status(404).json({ erro: 'Cliente não encontrado' });
    res.json(cliente);
  },

  async atualizar(req, res) {
    const { id } = req.params;
    const { Nome_cli, Email_cli, CPF_cli } = req.body;

    try {
      const cliente = await prisma.clientes.update({
        where: { ID_cli: parseInt(id) },
        data: { Nome_cli, Email_cli, CPF_cli },
      });

      res.json({ mensagem: 'Cliente atualizado', cliente });
    } catch (err) {
      res.status(404).json({ erro: 'Cliente não encontrado' });
    }
  },

  async remover(req, res) {
    const { id } = req.params;

    try {
      await prisma.clientes.delete({ where: { ID_cli: parseInt(id) } });
      res.json({ mensagem: 'Cliente removido com sucesso' });
    } catch (err) {
      res.status(404).json({ erro: 'Cliente não encontrado' });
    }
  },
};

module.exports = clienteController;
