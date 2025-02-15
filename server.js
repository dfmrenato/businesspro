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
MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((client) => {
    db = client.db('usuarios');  // Acessa o banco de dados padrão
    console.log('Conectado ao MongoDB');
  })
  .catch((error) => {
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
    const usersCollection = db.collection('usuarios'); // Nome da coleção
    const newUser = { nome, email, senha };

    const result = await usersCollection.insertOne(newUser);
    res.status(201).json(result.ops[0]);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao adicionar usuário', error });
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
