var textArea = document.getElementById("textArea");

export class Pessoa {
  constructor(nome, cpf, ende, email, tel = null) {
    this.nome = nome;
    this.cpf = cpf;
    this.ende = ende;
    this.email = email;
    this.tel = tel;
  }
}

export class Estudante extends Pessoa {
  imprimitInformacoes() {
    textArea.innerHTML = `<p>Nome: ${this.nome} </p> <br> <p>CPF: ${this.cpf} </p> <br> <p>Endereço: ${this.ende} </p> <br> <p>E-mail: ${this.emaIL} </p> <br>`;
  }
}
