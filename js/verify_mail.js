import emailjs from 'emailjs-com';

function sendEmail() {
    let params = {
        name: "BPRO Verificação",
        email: "renato.santos36@aluno.educa.go.gov.br",
        subject: "ISso é um teste",
        message: "Ignore por favor"
    };
    
    emailjs.send('service_mr1z653', 'template_8qj7bar', params, '8aKoHvVdxMzLMZv2B')
    .then((result) => {
        console.log('E-mail enviado!', result);
    }, (error) => {
        console.log('Erro ao enviar:', error);
    });

}

sendEmail()