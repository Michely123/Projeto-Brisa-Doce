import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

const ACESS_SECRET = process.env

dotenv.config();
const chavesecreta = process.env.JWT_SECRET || "brisadocebrisadocebrisadoce"


function gerarTokenJWT(dadosUsuario) {
    return jwt.sign(dadosUsuario, chavesecreta, {expiresIn: '1h'});
}

const dadosUsuarioAutenticado ={
    id: 1,
    nome:'yara'
}

function verificartokenJWT(token){
    try{
        return jwt.verify(token, chavesecreta)
    } catch (error) {
        console.error("erro ao verificar token JWT", (error).message);
        return null;
    }
}

const tokenJWT = gerarTokenJWT(dadosUsuarioAutenticado);

console.log("tokenJWT:", tokenJWT);

//const tokenrecebido = 'aaaaa'
const tokenrecebido = tokenJWT;

const dadosverificados = verificartokenJWT(tokenrecebido);
if (dadosverificados){
    console.log("Token JWT válido. Dados do usuario: ", dadosverificados);
}else{
    console.log("Token inválido ou expirado.");
}