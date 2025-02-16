/*// Pesquisar no cabeçalho
document.getElementById('CabecalhoPesquisa').addEventListener('submit', (event) => {
    // Previne o envio real do formulário
    event.preventDefault();

    // Obtém os valores dos campos do formulário
    const pesquisa = document.getElementById('CabecalhoPesquisa').elements["pesquisa"].value;

    // Exibe um alerta com os dados preenchidos
    window.alert(`Pesquisa: ${pesquisa}`);
    document.getElementById('CabecalhoPesquisa').elements["pesquisa"].value = "";
});*/

// Abrir o menu do cabeçalho em dispositivos pequenos
if(document.getElementById('MenuIcone')) {
    document.getElementById('MenuIcone').addEventListener('click', () => {
        let lista = document.querySelector('.Lista');
        if(lista.classList.contains("ativo")) {
            lista.classList.remove('ativo');
            document.querySelector('.MenuIcone').innerHTML = '<i class="fa-solid fa-bars"></i>';
        } else {
            lista.classList.add('ativo');
            document.querySelector('.MenuIcone').innerHTML = '<i class="fa-solid fa-xmark"></i>';
        };
    });
};

// Caixa de alerta personalizada
if(document.getElementById('CaixaAlerta')) {
    document.getElementById('CaixaAlertaConfirmar').addEventListener('click', () => {
        document.querySelector('#CaixaAlerta').classList.remove('ativo');
    });
    function Notificar(titulo, texto, botao, botao_funcao) {
        if(!botao) botao = "Confirmar";
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
} else {
    document.write(`
        <!-- Caixa de alerta personalizada-->
        <div id="CaixaAlerta" class="CaixaAlerta">
            <div class="CaixaAlertaConteudo">
                <h2 id="CaixaAlertaTitulo">Título</h2>
                <p id="CaixaAlertaTexto">Contexto</p>
                <button id="CaixaAlertaConfirmar" class="BotaoPrimario">Confirmar</button>
            </div>
        </div>
    `);
    document.getElementById('CaixaAlertaConfirmar').addEventListener('click', () => {
        document.querySelector('#CaixaAlerta').classList.remove('ativo');
    });
    function Notificar(titulo, texto, botao, botao_funcao) {
        if(!botao) botao = "Confirmar";
        document.getElementById("CaixaAlertaTitulo").innerHTML = titulo;
        document.getElementById("CaixaAlertaTexto").innerHTML = texto;
        document.getElementById("CaixaAlertaConfirmar").innerHTML = botao;
        document.querySelector('#CaixaAlerta').classList.add('ativo');
        if(!botao) botao = "Confirmar";
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