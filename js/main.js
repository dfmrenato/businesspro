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
// Selecionando todos os botões de rádio pelo nome "logon_seletor"
let radios = document.querySelectorAll('input[name="logon_seletor"]');

// Associando o evento 'change' a cada botão de rádio
radios.forEach(radio => {
    radio.addEventListener('change', () => {
        switch (radio.id) {
            case "registrar":
                document.getElementById("Registro").classList.add("ativo");
                document.getElementById("Login").classList.remove("ativo");
                break;

            case "logar":
                document.getElementById("Login").classList.add("ativo");
                document.getElementById("Registro").classList.remove("ativo");
                break;
        
            default:
                break;
        }
    });
});