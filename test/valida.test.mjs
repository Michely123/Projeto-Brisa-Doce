const { validarNome, validarEmail, validarIdade } = require("../validarDados.mjs");

describe("Teste de Funcao de validar idade", ()=>{
    test("idade nao válida ",()=>{
        expect(ValidarIdade(17)).toBe(false);
    });
    test("tu é muito velho",()=>{
        expect(ValidarIdade(101)).toBe(false);
    });
    
    test("Você foi aceito com sucesso!!!", ()=>{
        expect(ValidarIdade(50)).toBe(true);
    });
});

