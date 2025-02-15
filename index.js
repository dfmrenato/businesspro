import mongoose from "mongoose";
import app from "./app.js";
import path from "path";

( async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/bancodedados")
        console.log("BANCO DE DADOS CONECTADO");

        const onListening = () => {
            console.log("Listening on PORT 5000");
        }

        app.listen(5000, onListening)

        app.get('/', (req,res) => {
            res.sendFile('logon.html', {root: path.join(__dirname)})
        })
    } catch (error) {
        console.error(`Erro: ${error}`);
        throw err;
    }
})();