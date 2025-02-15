const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const port = 3000; // ou qualquer outra porta que você preferir

// Middleware para permitir que o Express aceite JSON
app.use(express.json());
app.use(cors());

// Conectar ao MongoDB usando o link de conexão fornecido
const uri = 'mongodb+srv://renatosantos36:2t9s1qGOojyShgs7@projetocluster.i1z4e.mongodb.net/?retryWrites=true&w=majority&appName=ProjetoCluster';

let db;

// Conectar ao MongoDB
const client = MongoClient.connect(uri)
client.then((client) => {
    db = client.db('usuarios');  // Acessa o banco de dados padrão
    console.log('Conectado ao MongoDB');
}).catch((error) => {
    console.error('Erro ao conectar ao MongoDB:', error);
});

// Rota de exemplo
app.get('/', (req, res) => {
    res.send('Olá, mundo! Conectado ao MongoDB!');
});

// Rota para adicionar um usuário
app.post('/add-user', async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
        if (!nome || !email || !senha) {
            return res.status(400).json({ message: 'Nome, email e senha são obrigatórios' });
        }

        const usersCollection = db.collection('usuarios');

        // Verifica se o e-mail já existe no banco de dados
        const existingUser = await usersCollection.findOne({ email });

        if (existingUser) {
            return res.status(409).json({ message: 'E-mail já cadastrado' }); // Código 409 = Conflito
        }

        const newUser = { nome, email, senha };
        const result = await usersCollection.insertOne(newUser);

        console.log('Usuário inserido:', result);
        res.status(201).json(result);

    } catch (error) {
        console.error('Erro ao adicionar usuário:', error);
        res.status(500).json({ message: 'Erro ao adicionar usuário', error: error.message });
    }
});


// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
