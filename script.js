class ContaCorrente {
  constructor(numero, agencia, conta, saldo) {
    this.numero = numero;
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
  }

  extrato() {
    console.log(" ");
    return "!!! Saldo bancário: R$" + this.saldo;
  }

  deposito(dep) {
    if (dep < 0) {
      console.log("Valor inválido");
    } else {
      this.saldo += dep;
      console.log("Valor depositado: " + dep);
    }
  }

  saque(saq) {
    if (saq > this.saldo) {
      console.log("Saldo insuficiente");
    } else if (saq < 0) {
      console.log("Valor inválido");
    } else {
      this.saldo -= saq;
      console.log("Valor sacado: " + saq);
    }
  }
}

class ContaSalario extends Conta {
  extrato() {
    this.saldo--;
  }
}

var cnt;

function processarFormulario() {
  var name = document.getElementById("name").value;
  var account = document.querySelector('input[name="account"]:checked').value;
  var textArea = document.getElementById("textArea");
  var saldo = parseInt(Math.random() * 1000);

  switch (account) {
    case "corrente":
      var cnt = new Conta(parseInt(Math.random() * 10), parseInt(Math.random() * 100), name, saldo);

      textArea.innerHTML = "<p>Conta corrente criada com sucesso!</p>";
      console.log("a");
      break;

    case "poupanca":
      pessoa = new ContaPoupanca();
      textArea.innerHTML = "<p>Conta poupança criada com sucesso!</p>";
      console.log("b");
      break;

    default:
      textArea.innerHTML = "<p>Algo aconteceu de errado!</p>";
  }

  return false;
}
