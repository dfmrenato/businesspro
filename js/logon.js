// Abrir o menu de login ou registro
document.getElementById('LoginOpcao').addEventListener('click', () => {
    document.querySelector('#LoginOpcao').classList.add('ativo');
    document.querySelector('#LoginMenu').classList.add('ativo');
    document.querySelector('#RegistroOpcao').classList.remove('ativo');
    document.querySelector('#RegistroMenu').classList.remove('ativo');
});
document.getElementById('RegistroOpcao').addEventListener('click', () => {
    document.querySelector('#LoginOpcao').classList.remove('ativo');
    document.querySelector('#LoginMenu').classList.remove('ativo');
    document.querySelector('#RegistroOpcao').classList.add('ativo');
    document.querySelector('#RegistroMenu').classList.add('ativo');
});

// Exibir senha
document.getElementById('ExibirSenha').addEventListener('submit', (event) => {
    // Previne o envio real do formulário
    event.preventDefault();

    var x = document.getElementById("Senha");
    
    if (x.type === "password") {
        x.type = "text";
        x.placeholder = "1234";
        document.querySelector('.ExibirSenha img').src = "img/icone/OcultarSenha.png";
    } else {
        x.type = "password";
        x.placeholder = "****";
        document.querySelector('.ExibirSenha img').src = "img/icone/ExibirSenha.png";
    }
});