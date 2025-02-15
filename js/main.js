// Pesquisar no cabeçalho
document.getElementById('CabecalhoPesquisa').addEventListener('submit', (event) => {
    // Previne o envio real do formulário
    event.preventDefault();

    // Obtém os valores dos campos do formulário
    const pesquisa = document.getElementById('CabecalhoPesquisa').elements["pesquisa"].value;

    // Exibe um alerta com os dados preenchidos
    window.alert(`Pesquisa: ${pesquisa}`);
    document.getElementById('CabecalhoPesquisa').elements["pesquisa"].value = "";
});

// Abrir o menu do cabeçalho em dispositivos pequenos
document.getElementById('MenuIcone').addEventListener('click', () => {
    let lista = document.querySelector('.Lista');
    if(lista.classList.contains("ativo")) {
        lista.classList.remove('ativo');
        document.querySelector('.MenuIcone img').src = "img/icone/menu.png";
    } else {
        lista.classList.add('ativo');
        document.querySelector('.MenuIcone img').src = "img/icone/fechar.png";
    };
})

// Abrir o menu de login ou registro
// Selecionando todos os botões de rádio
const radios = document.querySelectorAll('input[name="logon_seletor"]');

// Função para mostrar o menu correspondente ao botão de rádio selecionado
function toggleMenus() {
    const menuRegistro = document.getElementById('RegistroMenu');
    const menuLogin = document.getElementById('LoginMenu');

    // Se o botão de "Registrar" estiver selecionado
    if (document.getElementById('RegistroOpcao').checked) {
        menuRegistro.classList.add('ativo');
        menuLogin.classList.remove('ativo');
    }
    // Se o botão de "Logar" estiver selecionado
    else if (document.getElementById('LoginOpcao').checked) {
        menuLogin.classList.add('ativo');
        menuRegistro.classList.remove('ativo');
    }
}

// Adicionando evento 'change' a todos os botões de rádio
radios.forEach(radio => {
    radio.addEventListener('change', toggleMenus());
});

// Chama a função ao carregar a página para garantir que o menu inicial esteja correto
toggleMenus();