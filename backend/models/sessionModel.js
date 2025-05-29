const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const sessaoModel = {
  async criar(data) {
    return await prisma.sessao.create({ data });
  },

  async listarPorCliente(clienteId) {
    return await prisma.sessao.findMany({ where: { clienteId } });
  },

  async removerPorId(id) {
    return await prisma.sessao.delete({ where: { id } });
  },

  async removerPorToken(token) {
    return await prisma.sessao.deleteMany({ where: { token } });
  },
};

module.exports = sessaoModel;
