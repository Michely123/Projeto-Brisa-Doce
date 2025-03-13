function validarNome(nome) {
    return typeof nome === "string" && nome.trim().length >= 3;
  }
  
  function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return typeof email === "string" && regex.test(email);
  }
  
  function validarIdade(idade) {
    return typeof idade === "number" && idade >= 18 && idade <= 100;
  }
  
  module.exports = { validarNome, validarEmail, validarIdade };