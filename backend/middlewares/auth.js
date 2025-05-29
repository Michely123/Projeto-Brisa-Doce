const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.cookies?.accessToken;
  if (!token) return res.status(401).json({ erro: 'Acesso negado. Token não fornecido.' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ erro: 'Token inválido ou expirado.' });
  }
};

module.exports = auth;
