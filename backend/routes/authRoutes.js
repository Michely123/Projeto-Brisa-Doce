const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const auth = require('../middlewares/auth');

router.post('/login', authController.login);
router.post('/logout', auth, authController.logout);
router.post('/refresh', authController.refresh);
router.get('/sessoes', auth, authController.listarSessoes);
router.delete('/sessoes/:id', auth, authController.revogarSessao);

module.exports = router;
