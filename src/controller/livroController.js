import livro from "../models/livros.js";
import { autor } from "../models/autores.js";

class LivroController {
    static async ListarLivros (req, res) {
        try {
            const listalivros = await livro.find({});
            res.status(200).json(listalivros);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição`});
        }
    };

    static async BuscarLivroPorId (req, res) {
        try {
            const id = req.params.id;
            const livroId = await livro.findById(id);
            res.status(200).json(livroId);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao buscar livro por ID`});
        }
    };

    static async AdicionarLivros (req, res) {
        const novoLivro = req.body
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor)
            const livrocompleto = { ...novoLivro, autor: { ...autorEncontrado._doc }};
            const livroCriado = await livro.create(livrocompleto)

            res.status(200).json({ message: "Livro adicionado", livroCriado})
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao adicionar livro`});
        }
    };

    static async AtualizarLivroPorId (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message:"Livro atualizado"});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao atualizar livro`});
        }
    };

    static async DeletarLivroPorId (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({message:"Livro Deletado"});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao deletar livro`});
        }
    };

    static async BuscarLivroPorEditora (req, res) {
        try {
            const nomeEditora = req.query.editora;
            const livrosEncontrados = await livro.find({ editora: nomeEditora })
            res.status(200).json(livrosEncontrados)
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao buscar livro`});
        }
    }
};

export default LivroController;