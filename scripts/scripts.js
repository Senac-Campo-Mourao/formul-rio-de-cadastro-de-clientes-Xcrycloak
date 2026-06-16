document.getElementById('formCadastro').addEventListener('submit', function (event){
    event.preventDefault();

    const name = document.getElementById('clientName').value;
    const cpf = document.getElementById('clientCPF').value;
    const tel = document.getElementById('clientTel').value;
    const salario = document.getElementById('clientSalario').value;
    const nascimento = document.getElementById('clientNascimento').value;

    console.log(name);
    console.log(cpf);
    console.log(tel);
    console.log(salario);
    console.log(nascimento);

});