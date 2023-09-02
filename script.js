import { Pessoa, Estudante } from "./types";

var cnt;

function processarFormulario() {
  var nome = document.getElementById("name").value;
  var cpf = document.getElementById("cpf").value;
  var ende = document.getElementById("ende").value;
  var email = document.getElementById("email").value;
  var telefone = document.getElementById("phone").value;
  var tipo = document.querySelector('input[name="type"]:checked').value;

  var textArea = document.getElementById("textArea");
  var botao = document.getElementById("botao");

  switch (tipo) {
    case "estudante":
      cnt = new Estudante(nome, cpf, ende, email, telefone);
      textArea.innerHTML = "<p>Conta estudante criada com sucesso!</p>";
      break;
    case "pessoa":
      cnt = new Pessoa(nome, cpf, ende, email, telefone);
      textArea.innerHTML = "<p>Conta pessoa criada com sucesso!</p>";
      break;
  }

  botao.innerHTML = "<button onclick='exibirInformacoes()'>Exibir Informações</button>";
  return false;
}

function exibirInformacoes() {
  var textArea = document.getElementById("textArea"); // Adicionando textArea aqui
  if (cnt instanceof Estudante) {
    textArea.innerHTML = `<p>Você possui uma conta de Estudante</p>`;
    cnt.imprimirInformacoes();
  } else if (cnt instanceof Pessoa) {
    textArea.innerHTML = `<p>Você possui uma conta de Pessoa</p>`;
  }
}
