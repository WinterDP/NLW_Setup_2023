/*
Variaveis e tipos de dados
são informações armazenadas de diversas formas, desde textos números ou booleanos
 // declaração e atribuição de valor
 let boasVindas = 'Fala, Dev!';

 // reatribuição de valor valor
 boasVindas = `Fala, Dev! Tudo beleza?!`;

 // constante não pode ter seu valor atualizado
 const serHumano = true;
 serHumano = false // Erro!

 Objetos
 abstrações do mundo com seus atributos e métodos
 // criando um objeto
 const celular = {
  cor: 'preto', // atributo de celular
  ligar: function() {} // método de celular
 }
 //objeto é determinado por {}

 // usando um objeto
 celular.cor // preto
 celular.ligar() // executa função


 Será usada uma biblioteca criada para o workshop
 https://maykbrito.github.io/libs/NLWSetup/documentation/NLWSetup.html
*/

/*============== configuração inicial =========== */
const form = document.querySelector("#form-habits") // atribui o form do HTML como uma variável
const nlwSetup = new NLWSetup(form) // ativação da lib

//utilização da biblioteca para adicionar um habito praticado em uma data

//criação de um objeto data com habitos praticados em determinados dias

const data = {
  run: ["02-02", "02-04", "02-05", "02-06", "02-07", "02-08"], //array de datas no formato necessário mm-dd
  exercise: ["02-01", "02-04"],
  walkingDog: ["02-03"],
}

nlwSetup.setData(data)
nlwSetup.load()
