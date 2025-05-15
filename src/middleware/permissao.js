import { request, response, nextfunction }from 'express';

export function autorizar(){
    return(req, res, next) => {
        const usuario = req.usuario;

        if(!usuario || !tiposPermitidos.icludes(usuario.tipo)) {
            res.status(403).json({erro: 'Acesso negado!!!'});
            return;
        }

        next();
    };
}