import { autor } from "../models/autores.js";

class AutorController {
    static async ListarAutores (req, res) {
        try {
            const listaautores = await autor.find({});
            res.status(200).json(listaautores);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição`});
        }
    };

    static async BuscarAutorPorId (req, res) {
        try {
            const id = req.params.id;
            const autorId = await autor.findById(id);
            res.status(200).json(autorId);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao buscar autor por ID`});
        }
    };

    static async AdicionarAutores (req, res) {
        try {
            const novoautor = await autor.create(req.body);
            res.status(200).json({ message: "autor adicionado", novoautor})
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao adicionar autor`});
        }
    };

    static async AtualizarAutorPorId (req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({message:"autor atualizado"});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao atualizar autor`});
        }
    };

    static async DeletarAutorPorId (req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({message:"autor Deletado"});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao deletar autor`});
        }
    };
};

export default AutorController;