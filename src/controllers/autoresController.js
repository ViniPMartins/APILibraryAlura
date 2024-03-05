/* eslint-disable no-underscore-dangle */
import RequisicaoIncorreta from '../errors/RequisicaoIncorreta.js';
import { autores } from '../models/index.js';

class AutorController {
  static listarAutores = async (req, res, next) => {
    try {
      const autoresResultado = autores.find();
      req.resultado = autoresResultado;
      next();
    } catch (erro) {
      next(erro);
    }
  };

  static listarAutorPorId = async (req, res, next) => {
    try {
      const { id } = req.params;
      const autorResultado = await autores.findById(id);
      req.resultado = autorResultado;
      next();
    } catch (erro) {
      next(erro);
    }
  };

  static cadastrarAutor = async (req, res, next) => {
    try {
      // eslint-disable-next-line new-cap
      const autor = new autores(req.body);
      const autorResultado = await autor.save();
      req.resultado = autorResultado !== null ? autorResultado._id : null;
      next();
    } catch (erro) {
      next(erro);
    }
  };

  static atualizarAutor = async (req, res, next) => {
    try {
      if (Object.keys(req.body).length === 0) {
        next(new RequisicaoIncorreta().sendResponse(res));
      } else {
        const { id } = req.params;
        const autorResultado = await autores.findByIdAndUpdate(id, { $set: req.body });
        req.resultado = autorResultado !== null ? autorResultado._id : null;
        next();
      }
    } catch (erro) {
      next(erro);
    }
  };

  static excluirAutor = async (req, res, next) => {
    try {
      const { id } = req.params;
      const autorResultado = await autores.findByIdAndDelete(id);
      req.resultado = '';
      next();
    } catch (erro) {
      next(erro);
    }
  };
}

export default AutorController;
