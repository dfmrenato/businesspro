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
        document.querySelector('#ExibirSenhaR').innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    } else {
        x.type = "password";
        x.placeholder = "****";
        document.querySelector('#ExibirSenhaR').innerHTML = '<i class="fa-solid fa-eye"></i>';
    }
});
document.getElementById('ExibirSenhaL').addEventListener('click', (event) => {
    // Previne o envio real do formulário
    event.preventDefault();

    var x = document.getElementById("SenhaL");

    if (x.type === "password") {
        x.type = "text";
        x.placeholder = "1234";
        document.querySelector('#ExibirSenhaL').innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    } else {
        x.type = "password";
        x.placeholder = "****";
        document.querySelector('#ExibirSenhaL').innerHTML = '<i class="fa-solid fa-eye"></i>';
    }
});

/*

// Cadastrar usuário novo na DB
document.getElementById('RegistroFormulario').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const nome = document.getElementById('RegistroFormulario').elements["nome"].value;
    const tipo = document.getElementById('RegistroFormulario').elements["tipo"].value;
    const empresa = document.getElementById('RegistroFormulario').elements["empresa"].value;
    const email = document.getElementById('RegistroFormulario').elements["email"].value;
    const senha = document.getElementById('RegistroFormulario').elements["senha"].value;
    const data_criacao = new Date();

    try {
        // Comunicação com o backend
        const response = await fetch('https://evolved-legible-spider.ngrok-free.app/add-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, tipo, empresa, email, senha, data_criacao })
        });

        const data = await response.json();
        
        if(data.error_message) return Notificar(`Erro de cadastro`, `${data.error_message}`, 'OK');

        if (!response.ok) {
            throw new Error('Falha na solicitação');
        }

        // Código específico
        console.log('Usuário adicionado:', data);
        Notificar('Bem-vindo!', 'Usuário cadastrado com sucesso!', 'Prosseguir', () => {window.location.replace("./dashboard")});

        sessionStorage.setItem('UsuarioLogado', email);
        sessionStorage.setItem('UsuarioLogadoNome', nome);
        sessionStorage.setItem('UsuarioLogadoEmpresa', empresa);
        
    } catch (error) {
        console.error(error);
        Notificar('Erro ao realizar cadastro', error, 'OK');
    }
});

*/

// Tentar criar conta nova na DB
document.getElementById('RegistroFormulario').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const nome = document.getElementById('RegistroFormulario').elements["nome"].value;
    const tipo = document.getElementById('RegistroFormulario').elements["tipo"].value;
    const empresa = document.getElementById('RegistroFormulario').elements["empresa"].value;
    const email = document.getElementById('RegistroFormulario').elements["email"].value;
    const senha = document.getElementById('RegistroFormulario').elements["senha"].value;
    const data_criacao = new Date();

    try {
        // Comunicação com o backend
        const response = await fetch('https://evolved-legible-spider.ngrok-free.app/verify-email-register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, tipo, empresa, email, senha, data_criacao })
        });

        const data = await response.json();
        
        if(data.error_message) return Notificar(`Erro de cadastro`, `${data.error_message}`, 'OK');

        if (!response.ok) {
            throw new Error('Falha na solicitação');
        }

        // Código específico
        localStorage.setItem('VerificacaoEmail', email)
        EnviarEmail(`Criação de conta empresarial Business PRO`, `Seu código de verificação é ${data.codigo}`, "Business PRO", email)
        location.replace('./verify');
        
    } catch (error) {
        console.error(error);
        Notificar('Erro ao realizar cadastro', error, 'OK');
    }
});

// Logar com conta da DB
document.getElementById('LoginFormulario').addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('LoginFormulario').elements["email"].value;
    const senha = document.getElementById('LoginFormulario').elements["senha"].value;

    try {
        // Comunicação com o backend
        const response = await fetch('https://evolved-legible-spider.ngrok-free.app/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, senha })
        });

        const data = await response.json();

        if(data.error_message) return Notificar(`Erro de login`, `${data.error_message}`, 'OK');

        if (!response.ok) {
            throw new Error('Falha na solicitação');
        }

        // Código específico
        console.log('Usuário logado:', data.email);

        sessionStorage.setItem('UsuarioLogado', data.email);
        sessionStorage.setItem('UsuarioLogadoNome', data.nome);
        sessionStorage.setItem('UsuarioLogadoEmpresa', data.empresa);

        window.location.replace("./dashboard");

    } catch (error) {
        console.error(error);
        Notificar('Erro ao realizar login', error, 'OK');
    }

})