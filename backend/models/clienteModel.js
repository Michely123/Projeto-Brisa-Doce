const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const clienteModel = {
  async buscarPorEmail(email) {
    return await prisma.clientes.findUnique({ where: { Email_cli: email } });
  },

  async criarCliente(data) {
    return await prisma.clientes.create({ data });
  },
};

module.exports = clienteModel;
