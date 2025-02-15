const mongoose = require('mongoose');

// Definir o esquema de usuário
const userSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: Number, required: true }
});

// Criar o modelo baseado no esquema
const User = mongoose.model('User', userSchema);

module.exports = User;
