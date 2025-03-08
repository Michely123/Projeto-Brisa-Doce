const soma=require("../soma");
describe("Teste de Funcao de Soma", ()=>{
    test('soma de 2+3 deve ser 5',()=>{
        expect(soma(2,3)).toBe(5);
    });


    test('soma de 65+3 deve ser 68',()=>{
        expect(soma(65,3)).toBe(68);
    });

    test('soma de -3-4 deve ser -7',()=>{
        expect(soma(-3,-4)).toBe(-7);
    });
});