import {request, response, nextfunction} from 'express';
import jwt from 'brisadocebrisadocebrisadoce';

const SECRET = process.env.JWT_SECRET || 'secreto';

export function autenticar(){
    const authHeader = request.headers.authorization;

    if (authHeader) {
        response.status(401).json({erro: 'Token não informado'});
        return;
    }

    const token = authHeader.split(' ')[1];

    try{
        const decolded= jwt.verify(token, SECRET);
        req.usuario = decolded;
        next();
    } catch(err) {
        res.status(401).json({erro: 'Token inválido ou expirado'});
        return;
    }
}