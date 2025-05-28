// Botões da caixa de alerta

// Abrir o menu do cabeçalho em dispositivos pequenos
if(document.getElementById('MenuIcone')) {
    document.getElementById('MenuIcone').addEventListener('click', () => {
        let lista = document.querySelector('.Lista');
        if(lista.classList.contains("ativo")) {
            lista.classList.remove('ativo');
            document.getElementById('MenuIcone').innerHTML = '<i class="fa-solid fa-bars"></i>';
        } else {
            lista.classList.add('ativo');
            document.getElementById('MenuIcone').innerHTML = '<i class="fa-solid fa-xmark"></i>';
        };
    });
};

// Caixa de alerta personalizada
if(!document.getElementById('CaixaAlerta')) {
    document.write(`
        <!-- Caixa de alerta personalizada -->
        <div id="CaixaAlerta" class="CaixaAlerta">
            <div class="CaixaAlertaConteudo">
                <h2 id="CaixaAlertaTitulo">Título</h2>
                <p id="CaixaAlertaTexto">Contexto</p>
                <div class="CaixaAlertaFooter">
                    <button id="CaixaAlertaConfirmar" class="BotaoPrimario">Confirmar</button>
                </div>
            </div>
        </div>
    `);

    document.getElementById('CaixaAlertaConfirmar').addEventListener('click', () => {
        document.querySelector('#CaixaAlerta').classList.remove('ativo');
    });

    function Notificar(titulo="Título", texto="Texto", botao="Confirmar", botao_funcao=()=>{}) {
        document.getElementById("CaixaAlertaTitulo").innerHTML = titulo;
        document.getElementById("CaixaAlertaTexto").innerHTML = texto;
        document.getElementById("CaixaAlertaConfirmar").innerHTML = botao;
        document.querySelector('#CaixaAlerta').classList.add('ativo');

        if(botao_funcao) {
            document.getElementById('CaixaAlertaConfirmar').addEventListener('click', () => {
                document.querySelector('#CaixaAlerta').classList.remove('ativo');
                botao_funcao();
            });
        }
    };
}

// Deslogar
function UsuarioSair() {
    if(sessionStorage.getItem('UsuarioLogado')) {
        sessionStorage.removeItem('UsuarioLogado');
    };
    Notificar('Saiu da sua conta', 'Seus dados foram salvos e você foi desconectado(a) da sua conta.', 'Recarregar página', () => {location.reload();});
}

// Usuário offline
window.addEventListener('offline', () => {
    console.log('Você ficou offline!');
    Notificar('Você está offline!', 'Para a segurança dos usuários, o Business PRO só funciona com uma conexão à internet. Tente novamente quando seu dispositivo estiver conectado.', 'OK', () => {
        sessionStorage.clear();
        document.body.innerHTML = `
            <!-- Você está sem internet -->
            <div style="
                display: flex;
                flex-direction: column;
                align-items: center;
                height: 100vh;
                justify-content: center;
            ">
                <h1>Que chato...</h1>
                <p>Seu dispositivo está desconectado.<br>Reconecte para acessar o Business PRO.</p>
            </div>
        `;
        document.body.id = '';
        document.body.classList.forEach(c => document.body.classList.remove(c));
    });
});
window.addEventListener('online', () => {
    window.location.reload();
})