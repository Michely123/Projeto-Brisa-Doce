const validarIdade = require("../validarDados");

describe("Teste de Funcao de validar idade", ()=>{
    test("idade nao válida ",()=>{
        expect(validarIdade(17)).toBe(false);
    });
});