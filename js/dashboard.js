// Página acessível apenas para usuários logados
if(!sessionStorage.getItem('UsuarioLogado')) {
    location.replace('./index');
}

// Selecionar uma aba
const Abas = document.getElementsByClassName('BarraLateralItem');
for (const aba in Abas) {
    aba.addEventListener('click', () => {
        Notificar('Título', 'Você foi moggado');
    });
}