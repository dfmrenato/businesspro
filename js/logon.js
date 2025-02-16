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
            alert('E-mail já cadastrado. Use outro ou tente fazer login.');
            return;
        }

        if (!response.ok) {
            throw new Error(data.message || 'Falha na solicitação');
        }

        console.log('Usuário adicionado:', data);
        alert('Usuário cadastrado com sucesso!');

        sessionStorage.setItem('UsuarioLogado', email);
        window.location.replace("./");
    } catch (error) {
        console.error(error);
        alert('Erro ao cadastrar usuário: '+error);
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
                alert('Conta inexistente. Verifique seu email e senha ou tente se cadastrar.');
                return;
                break;

            case 409:
                alert('Senha incorreta para o e-mail informado!');
                return;
                break;
        
            default:
                if (!response.ok) {
                    throw new Error(data.message || 'Falha na solicitação');
                }
                console.log('Usuário logado:', data);
                sessionStorage.setItem('UsuarioLogado', email);
                window.location.replace("./");
                break;
        }

    } catch (error) {
        console.error(error);
        alert('Erro ao realizar login: '+error);
    }

})