document.getElementById('CabecalhoPesquisa').addEventListener('submit', (event) => {
    event.preventDefault();  // Previne o envio real do formulário

    // Obtém os valores dos campos do formulário
    const pesquisa = document.getElementById('CabecalhoPesquisa').elements["pesquisa"].value;

    // Exibe um alerta com os dados preenchidos
    window.alert(`Pesquisa: ${pesquisa}`);
    document.getElementById('CabecalhoPesquisa').elements["pesquisa"].value = "";
});

function verificar_internet() {
    document.getElementById('OnlineIndicador').innerHTML = `Você está ${(window.navigator.onLine ? 'on' : 'off') + 'line'}`
}