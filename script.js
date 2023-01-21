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
const addDayButton = document.querySelector("header button") // recebe o botão da página

addDayButton.addEventListener("click", addDate) // atribui um evento ao clique do botão na página
form.addEventListener("change", save)
//================== Funções ==========================

function addDate() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5) // pega a data do dia de hoje no formato dd/mm/yyyy e recorta os 5 ultimos caracteres da String

  if (!nlwSetup.dayExists(today)) {
    //verifica se a data adicionada já existe
    alert("Adicionado com sucesso ✅")
    nlwSetup.addDay(today)
  } else {
    alert("Dia já incluso ❌")
  }
}

function save() {
  localStorage.setItem("Winter@data", JSON.stringify(nlwSetup.data)) //função responsável por guardar no localStorage as informações das datas, através do objeto JSON que transforma o objeto em texto
}


const data = JSON.parse(localStorage.getItem("Winter@data")) || {} // recupera os itens armazenados no localStoragee garante que null vai ser carregado na primeira execução
nlwSetup.setData(data) // recarrega os itens armazenados
nlwSetup.load()
