const soma=require("../soma");
describe("Teste de Funcao de Soma", ()=>{
    test('soma de 2+3 deve ser 5',()=>{
        expect(soma(2,3)).toBe(5);
    });


    test('soma de 65+3 deve ser 68',()=>{
        expect(soma(65,3)).toBe(68);
    });

    test('soma 50',()=>{
        expect(soma(25,25)).toBe(50);
    });
});