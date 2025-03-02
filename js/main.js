// Carregar EmailJS
emailjs.init({
    publicKey: "8aKoHvVdxMzLMZv2B",
});

// Função enviar email
function EnviarEmail(assunto="Assunto", mensagem="Mensagem", remetente="Business PRO", destinatario="undefined", template="template_8qj7bar") {
    if(destinario=="undefined") return false;
    return emailjs.send('service_mr1z653', template, {
        subject: assunto,
        message: mensagem,
        email: destinatario,
        name: remetente
    }).then(
        (response) => {
            console.log('SUCESSO!', response.status, response.text);
        },
        (error) => {
            console.log('FALHOU...', error);
        },
    );
}

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
    Notificar('Você está offline!', 'Tente novamente quando tiver conexão à internet', 'OK', () => {
        sessionStorage.clear();
        document.body.innerHTML = `
            <h1>Que chato...</h1>
            <p>Você está sem internet</p>
        `
    });
});
window.addEventListener('online', () => {
    window.location.reload();
})