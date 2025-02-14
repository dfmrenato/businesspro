function pesquisar() {
    const form = document.getElementById('cabecalhopesquisa');
    const pesq = form.elements['pesquisa'];
    alert(`Você pesquisou: ${pesq.value}`);
}