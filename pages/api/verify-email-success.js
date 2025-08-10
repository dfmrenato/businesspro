import { MongoClient } from 'mongodb';

// Conexão com MongoDB
const client = new MongoClient(process.env.MONGODB_URI);
const dbName = 'businesspro';

/**
 * @param {Request} req 
 * @param {Response} res 
 */
export default async function handler(req, res) {
  const { email, codigo } = req.body;
  const temporario_tipo = "conta";

  await client.connect();

  try {
    let usuario = client.db(dbName).collection('temporario').findOne({ temporario_tipo, email, codigo });

    if ((await usuario) != null) {

      try {

        const usersCollection = client.db(dbName).collection('usuarios');

        // Verifica se o e-mail ou empresa já existe no banco de dados
        if (await client.db(dbName).collection('funcionarios').findOne({ email }) || await usersCollection.findOne({ email }) || await usersCollection.findOne({ empresa: (await usuario).empresa })) {
          return res.status(409).json({ error_message: 'Já existe uma conta com este e-mail ou empresa. Tente fazer login ou alterá-los.' }); // Código 409 = Conflito
        }

        const newUser = {
          nome: (await usuario).nome,
          empresa: (await usuario).empresa,
          email: (await usuario).email,
          senha: (await usuario).senha,
          data_criacao: (await usuario).data_criacao
        };
        const result = await usersCollection.insertOne(newUser);

        console.log('Usuário inserido:', result);
        res.status(201).json({ email: (await usuario).email, nome: (await usuario).nome, empresa: (await usuario).empresa });

        // Cadastrar empresa
        client.db(dbName).collection('empresas').insertOne({
          nome: (await usuario).empresa,
          proprietario: (await client.db(dbName).collection('usuarios').findOne({ empresa: (await usuario).empresa }))._id,
          data_criacao: (await usuario).data_criacao,
        })

        client.db(dbName).collection('temporario').deleteOne({ _id: (await usuario)._id });

      } catch (error) {
        console.error('Erro ao adicionar usuário:', error);
        res.status(500).json({ error_message: error.message });
      }

    } else {
      return res.status(404).json({ error_message: 'Código de verificação incorreto ou expirado.' });
    };
  } catch (error) {
    console.error('Erro ao verificar email com sucesso:', error);
    res.status(500).json({ error_message: error.message });
  } finally {
    await client.close();
  }

}
