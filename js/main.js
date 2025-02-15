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
document.querySelector('.MenuIcone').addEventListener('click', () => {
    let lista = document.querySelector('.Lista');
    if(lista.classList.contains("ativo")) {
        lista.classList.remove('ativo');
        document.querySelector('.MenuIcone img').src = "img/icone/menu.png";
    } else {
        lista.classList.add('ativo');
        document.querySelector('.MenuIcone img').src = "img/icone/fechar.png";
    };
})