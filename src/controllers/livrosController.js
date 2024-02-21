import {autores, livros} from "../models/index.js";

class LivroController {

  static listarLivros = async (req, res, next) => {
    try {
      const livrosResultado = livros.find()
      req.resultado = livrosResultado
      const totalRegistros = await livros.countDocuments()
      req.totalRegistros = totalRegistros
      next()

    } catch (erro) {
      next(erro);
    }
  }

  static listarLivroPorId = async (req, res, next) => {
    try {
      const id = req.params.id;
      const livroResultados = await livros.findById(id)
      req.resultado = livroResultados
      next()

    } catch (erro) {
      next(erro);
    }
  }

  static cadastrarLivro = async (req, res, next) => {
    try {
      let livro = new livros(req.body);
      const livroResultado = await livro.save();
      req.resultado = livroResultado !== null ? livroResultado._id : null
      next()

    } catch (erro) {
      next(erro);
    }
  }

  static atualizarLivro = async (req, res, next) => {
    try {
      const id = req.params.id;
      const livroResultado = await livros.findByIdAndUpdate(id, {$set: req.body});
      req.resultado = livroResultado !== null ? livroResultado._id : null
      next()

    } catch (erro) {
      next(erro);
    }
  }

  static excluirLivro = async (req, res, next) => {
    try {
      const id = req.params.id;
      const livroResultado = await livros.findByIdAndDelete(id);
      req.resultado = livroResultado !== null ? livroResultado._id : null
      next()

    } catch (erro) {
      next(erro);
    }
  }

  static listarLivroPorFiltro = async (req, res, next) => {
    try {
      const filtros = await processaBusca(req.query);
      const livroResultados = livros.find(filtros)
      req.resultado = livroResultados
      const totalRegistros = await livros.countDocuments()
      req.totalRegistros = totalRegistros
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