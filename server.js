const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Conexão com o MongoDB (substitua pela sua URL do MongoDB)
mongoose.connect('mongodb+srv://renatosantos36:2t9s1qGOojyShgs7@projetocluster.i1z4e.mongodb.net/?retryWrites=true&w=majority&appName=ProjetoCluster')
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Defina um modelo de dados
const Usuario = mongoose.model('Usuario', new mongoose.Schema({
  nome: String,
  email: String,
}));

// Rota para enviar dados para o MongoDB
app.post('/addUsuario', async (req, res) => {
  const { nome, email, senha } = req.body;
  const usuario = new Usuario({ nome, email, senha });
  await usuario.save();
  res.send('Usuário adicionado com sucesso');
});

// Iniciar o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
