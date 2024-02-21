import NaoEncontrado from "../errors/NaoEncontrado.js";
import {autores, livros} from "../models/index.js";

class LivroController {

  static listarLivros = async (req, res, next) => {
    try {
      const livrosResultado = livros.find()
      req.resultado = livrosResultado
      next()
    } catch (erro) {
      next(erro);
    }
  }

  static listarLivroPorId = async (req, res, next) => {
    try {
      const id = req.params.id;

      const livroResultados = await livros.findById(id)
        .populate("autor", "nome")
        .exec();

      if (livroResultados !== null) {
        res.status(200).send(livroResultados);
      } else {
        next(new NaoEncontrado("Id do livro não localizado"))
      };

    } catch (erro) {
      next(erro);
    }
  }

  static cadastrarLivro = async (req, res, next) => {
    try {
      let livro = new livros(req.body);

      const livroResultado = await livro.save();

      res.status(201).send(livroResultado.toJSON());
    } catch (erro) {
      next(erro);
    }
  }

  static atualizarLivro = async (req, res, next) => {
    try {
      const id = req.params.id;

      const livroResultado = await livros.findByIdAndUpdate(id, {$set: req.body});

      if (livroResultado !== null) {
        res.status(200).send(livroResultado);
      } else {
        next(new NaoEncontrado("Id do livro não localizado"))
      };
    } catch (erro) {
      next(erro);
    }
  }

  static excluirLivro = async (req, res, next) => {
    try {
      const id = req.params.id;

      const livroResultados = await livros.findByIdAndDelete(id);

      if (livroResultados !== null) {
        res.status(200).send(livroResultados);
      } else {
        next(new NaoEncontrado("Id do livro não localizado"))
      };
    } catch (erro) {
      next(erro);
    }
  }

  static listarLivroPorFiltro = async (req, res, next) => {
    try {
      const filtros = await processaBusca(req.query);

      const livroResultados = livros.find(filtros)
                                    //.populate("autor", "nome")
                                    //.exec();

      req.resultado = livroResultados
      next()
    } catch (erro) {
      next(erro);
    }
  };
};

async function processaBusca (parametros) {
  const { editora, titulo, nomeAutor, minPaginas, maxPaginas } = parametros;

  let filtros = {};

  if (editora) filtros.editora = editora;

  if (minPaginas || maxPaginas) filtros.numeroPaginas = {};

  if(minPaginas) filtros.numeroPaginas.$gte = minPaginas;
  if(maxPaginas) filtros.numeroPaginas.$lte = maxPaginas;
  
  // Utilizando metodo regex do java script
  // const regxTitulo = new RegExp(titulo, "i")
  // if (titulo) filtros.titulo = regxTitulo;

  // Utilizando de pesquisa regez pelo mongose
  if (titulo) filtros.titulo = {$regex: titulo, $options: "i"};

  if (nomeAutor) {
    const autor = await autores.findOne({"nome":nomeAutor})
    if (autor !== "") {
      filtros.autor = autor._id
    } else {
      busca = null
    }
  }
  return filtros;
}

export default LivroController