// Abrir o menu de login ou registro
document.getElementById('LoginOpcao').addEventListener('click', () => {
    document.querySelector('#LoginOpcao').classList.add('ativo');
    document.querySelector('#LoginMenu').classList.add('ativo');
    document.querySelector('#RegistroOpcao').classList.remove('ativo');
    document.querySelector('#RegistroMenu').classList.remove('ativo');
});
document.getElementById('RegistroOpcao').addEventListener('click', () => {
    document.querySelector('#LoginOpcao').classList.remove('ativo');
    document.querySelector('#LoginMenu').classList.remove('ativo');
    document.querySelector('#RegistroOpcao').classList.add('ativo');
    document.querySelector('#RegistroMenu').classList.add('ativo');
});

// Exibir senha
document.getElementById('ExibirSenhaR').addEventListener('click', (event) => {
    // Previne o envio real do formulário
    event.preventDefault();

    var x = document.getElementById("SenhaR");

    if (x.type === "password") {
        x.type = "text";
        x.placeholder = "1234";
        document.querySelector('#ExibirSenhaR img').src = "img/icone/OcultarSenha.png";
    } else {
        x.type = "password";
        x.placeholder = "****";
        document.querySelector('#ExibirSenhaR img').src = "img/icone/ExibirSenha.png";
    }
});
document.getElementById('ExibirSenhaL').addEventListener('click', (event) => {
    // Previne o envio real do formulário
    event.preventDefault();

    var x = document.getElementById("SenhaL");

    if (x.type === "password") {
        x.type = "text";
        x.placeholder = "1234";
        document.querySelector('#ExibirSenhaL img').src = "img/icone/OcultarSenha.png";
    } else {
        x.type = "password";
        x.placeholder = "****";
        document.querySelector('#ExibirSenhaL img').src = "img/icone/ExibirSenha.png";
    }
});

// Cadastrar usuário novo na DB
document.getElementById('RegistroFormulario').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const nome = document.getElementById('RegistroFormulario').elements["nome"].value;
    const email = document.getElementById('RegistroFormulario').elements["email"].value;
    const senha = document.getElementById('RegistroFormulario').elements["senha"].value;

    try {
        const response = await fetch('https://evolved-legible-spider.ngrok-free.app/add-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, email, senha })
        });

        const data = await response.json();

        if (response.status == 409) {
            Notificar('Erro de cadastro', 'E-mail já cadastrado. Use outro ou tente fazer login.', 'OK');
            return;
        }

        if (!response.ok) {
            throw new Error(data.message || 'Falha na solicitação');
        }

        console.log('Usuário adicionado:', data);
        Notificar('Bem-vindo!', 'Usuário cadastrado com sucesso!', 'Prosseguir', () => {window.location.replace("./dashboard")});

        sessionStorage.setItem('UsuarioLogado', email);
        
    } catch (error) {
        console.error(error);
        Notificar('Erro ao cadastrar', error, 'OK');
    }
});

// Logar com conta da DB
document.getElementById('LoginFormulario').addEventListener('submit', async (event) => {

    event.preventDefault();

    const email = document.getElementById('LoginFormulario').elements["email"].value;
    const senha = document.getElementById('LoginFormulario').elements["senha"].value;

    try {
        const response = await fetch('https://evolved-legible-spider.ngrok-free.app/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, senha })
        });

        const data = await response.json();

        switch (response.status) {
            case 404:
                Notificar('Erro de login', 'Conta inexistente. Verifique seu email e senha ou tente se cadastrar.', 'OK');
                return;
                break;

            case 409:
                Notificar('Erro de login', 'Senha incorreta para o e-mail informado!', 'OK');
                return;
                break;
        
            default:
                if (!response.ok) {
                    throw new Error(data.message || 'Falha na solicitação');
                }
                console.log('Usuário logado:', data);
                sessionStorage.setItem('UsuarioLogado', email);
                window.location.replace("./dashboard");
                break;
        }

    } catch (error) {
        console.error(error);
        Notificar('Erro ao realizar login', error, 'OK');
    }

})