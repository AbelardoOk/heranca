var textArea = document.getElementById("textArea");
var cnt;

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  var nome = document.getElementById("name").value;
  var cpf = document.getElementById("cpf").value;
  var ende = document.getElementById("ende").value;
  var email = document.getElementById("email").value;
  var telefone = document.getElementById("phone").value;
  var tipo = document.querySelector('input[name="type"]:checked').value;

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
});

function exibirInformacoes() {
  if (cnt instanceof Estudante) {
    cnt.imprimirInformacoes();
  } else if (cnt instanceof Pessoa) {
    textArea.innerHTML = `<p>Você possui uma conta de Pessoa!</p>`;
  }
}

class Pessoa {
  constructor(nome, cpf, ende, email, tel = null) {
    this.nome = nome;
    this.cpf = cpf;
    this.ende = ende;
    this.email = email;
    this.tel = tel;
  }
}

class Estudante extends Pessoa {
  imprimirInformacoes() {
    textArea.innerHTML = `<p>Você possuí uma conta de estudante!</p> <br> <p>Nome: ${this.nome} </p> <p>CPF: ${this.cpf} </p> <p>Endereço: ${this.ende} </p> <p>E-mail: ${this.email} </p>`;
  }
}
