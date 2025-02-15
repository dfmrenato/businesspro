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