document.getElementById('cabecalhopesquisa').addEventListener('submit', (event) => {
    event.preventDefault();  // Previne o envio real do formulário

    // Obtém os valores dos campos do formulário
    const pesquisa = document.getElementById('pesquisa').value;

    // Exibe um alerta com os dados preenchidos
    alert(`Dados do Formulário:
    Pesquisa: ${pesquisa}`);
});

function verificar_internet() {
    document.getElementById('jsverifyonline').innerHTML = `Você está ${(window.navigator.onLine ? 'on' : 'off') + 'line'}`
}