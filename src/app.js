import express from "express";
import connectDataBase from "./config/dbConnection.js";
import livro from "./models/livros.js";

const connection = await connectDataBase();

connection.on("error", (erro) => {
    console.error("Erro de conexão", erro);
});

connection.once("open", () => {
    console.log("Conexão realizada com sucesso")
})

const app = express();
app.use(express.json())

function buscaLivro(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id)
    })
};

app.get('/', (req, res) => {
    res.status(200).send('API Livros')
});

app.get('/livros', async (req, res) => {
    const listalivros = await livro.find(); 
    res.status(200).json(listalivros);
});

app.get('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
});

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso");
});

app.put('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros[index]);
})

app.delete('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro deletado com sucesso!");
});

export default app;