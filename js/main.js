document.getElementById('cabecalhopesquisa').addEventListener('submit', (event) => {
    event.preventDefault();  // Previne o envio real do formulário

    // Obtém os valores dos campos do formulário
    const pesquisa = document.getElementById('cabecalhopesquisa').elements["pesquisa"].value;

    // Exibe um alerta com os dados preenchidos
    window.alert(`Pesquisa: ${pesquisa}`);
});

function verificar_internet() {
    document.getElementById('jsverifyonline').innerHTML = `Você está ${(window.navigator.onLine ? 'on' : 'off') + 'line'}`
}