import dotenv from 'dotenv';

dotenv.config();
const chavesecreta = process.env.JWT_SECRET


function gerarTokenJWT(dadosUsuario) {
    return jwt.sign(dadosUsuario, chavesecreta, {expiresIn: '1h'});
}

const dadosUsuario ={
    id: 1,
    nome:'yara'
}

function verificartokenJWT(token){
    try{
        return jtw.verify(token, chavesecreta)
    } catch (error) {
        console.error("erro ao verificar token JWT", (error).message);
        return null;
    }
}