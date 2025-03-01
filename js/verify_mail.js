(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
        publicKey: "8aKoHvVdxMzLMZv2B",
    });
    console.log('EMAILJS INICIADO');
})();

function EnviarEmail(assunto, mensagem, destinatario, nome_exibido) {
    emailjs.send('service_mr1z653', 'template_8qj7bar', {
        subject: assunto,
        message: mensagem,
        email: destinatario,
        name: nome_exibido
    }).then(
        (response) => {
            console.log('SUCESSO!', response.status, response.text);
        },
        (error) => {
            console.log('FALHOU...', error);
        },
    );
}