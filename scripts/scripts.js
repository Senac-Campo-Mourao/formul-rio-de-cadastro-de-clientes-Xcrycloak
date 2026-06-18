function validarCpf(cpf) {
  cpf = cpf.replace(/[.-]/g, "");
  if (cpf.length !== 11(/^(\\d)\\1{10}$/.test(cpf))) {
    return false;
  }

  let soma = 0;
  let resto;
  for (let i = 1; i <= 9; i++) {
    soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }

  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) {
    resto = 0;
  }

  const ultimoCaracter = parseInt(cpf.substring(10, 11));
  if (resto !== ultimoCaracter) {
    return false;
  }

  return true;
}

document.getElementById("clientCPF").addEventListener("blur", function () {
  const cpf = this.value;
  if (!validarCpf(cpf)) {
    alert("CPF inválido. Por favor, insira um CPF válido");
    this.value = "";
  }
});

document
  .getElementById("formCadastro")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("clientName").value;
    const cpf = document.getElementById("clientCPF").value;
    const tel = document.getElementById("clientTel").value;
    const salario = document.getElementById("clientSalario").value;
    const nascimento = document.getElementById("clientNascimento").value;

    console.log(name);
    console.log(cpf);
    console.log(tel);
    console.log(salario);
    console.log(nascimento);
  });
