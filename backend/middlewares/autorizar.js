const autorizar = (...permissoesPermitidas) => {
  return (req, res, next) => {
    const { cargo } = req.user;
    if (!permissoesPermitidas.includes(cargo)) {
      return res.status(403).json({ erro: 'Permissão negada.' });
    }
    next();
  };
};

module.exports = autorizar;
