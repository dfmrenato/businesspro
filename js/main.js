document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Previne o envio real do formulário

    // Obtém os valores dos campos do formulário
    const pesquisa = document.getElementById('pesquisa').value;

    // Exibe um alerta com os dados preenchidos
    alert(`Dados do Formulário:
    Pesquisa: ${pesquisa}`);
});