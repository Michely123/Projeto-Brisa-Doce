const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const auth = require('../middlewares/auth');
const autorizar = require('../middlewares/autorizar');

router.post('/registrar', clienteController.registrar);

router.get('/', auth, autorizar('admin'), clienteController.listar);
router.get('/:id', auth, autorizar('admin'), clienteController.buscarPorId);
router.put('/:id', auth, autorizar('admin'), clienteController.atualizar);
router.delete('/:id', auth, autorizar('admin'), clienteController.remover);

module.exports = router;
