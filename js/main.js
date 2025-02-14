const form = document.getElementById('cabecalho-pesquisa');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = document.getElementById('cabecalho-pesquisa');
    const pesq = form.elements['pesquisa'];
    alert(`Você pesquisou: ${pesq.value}`)
});