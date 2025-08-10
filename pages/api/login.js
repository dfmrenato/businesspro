import { MongoClient } from 'mongodb';

// Conexão com MongoDB
const client = new MongoClient(process.env.MONGODB_URI);
const dbName = 'businesspro';

/**
 * @param {Request} req 
 * @param {Response} res 
 */
export default async function handler(req, res) {
    const { email, senha } = req.body;

    await client.connect();

    try {
        if (!email || !senha) {
            return res.status(400).json({ error_message: 'Email e senha são obrigatórios' });
        }

        const usersCollection = client.db(dbName).collection('usuarios');
        const existingUser = await usersCollection.findOne({ email });

        if(existingUser) {

            if(existingUser.senha == senha) {
                console.log('Usuário logado:', email);
                return res.status(201).json({ email: email, nome: existingUser.nome, empresa: existingUser.empresa});
            } else {
                return res.status(409).json({ error_message: 'Senha incorreta para o e-mail informado.' });
            }

        } else {
            return res.status(404).json({ error_message: 'E-mail incorreto ou conta não cadastrada.' });
        }
        
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        res.status(500).json({ error_message: error.message });
    } finally {
        await client.close();
    }
}
