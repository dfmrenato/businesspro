const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000; // ou qualquer outra porta que você preferir

// Middleware para permitir que o Express aceite JSON
app.use(express.json());

// Conectar ao MongoDB usando o link de conexão fornecido
mongoose.connect('mongodb+srv://renatosantos36:2t9s1qGOojyShgs7@projetocluster.i1z4e.mongodb.net/?retryWrites=true&w=majority&appName=ProjetoCluster', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado ao MongoDB');
}).catch(err => {
    console.log('Erro ao conectar ao MongoDB:', err);
});

// Rota de exemplo
app.get('/', (req, res) => {
    res.send('Olá, mundo! Conectado ao MongoDB!');
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

const User = require('./models/User');

// Rota para adicionar um usuário
app.post('/add-user', async (req, res) => {
    const { nome, email, senha } = req.body;
    
    try {
        const newUser = new User({ nome, email, senha });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao adicionar usuário', error });
    }
});
