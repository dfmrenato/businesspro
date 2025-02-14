document.getElementById('cabecalho-pesquisa').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = document.getElementById('cabecalho-pesquisa');
    const pesquisa = form.elements['pesquisa']; // accessing element by name
    window.alert(`Você pesquisou: ${pesquisa}`)
})