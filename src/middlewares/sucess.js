import SucessBase from '../sucess/SucessBase.js';
import NaoEncontrado from '../errors/NaoEncontrado.js';
import SucessPost from '../sucess/SucessPost.js';
import SucessDelete from '../sucess/SucessDelete.js';
import SucessPut from '../sucess/SucessPut.js';

function sucess(req, res, next) {
  const calcPagAtual = Math.ceil(req.totalRegistros / req.limiteAtual);

  const resultado = {
    dados: req.resultado,
    paginaAtual: req.paginaAtual != null ? req.paginaAtual : 1,
    totalPaginas: Number.isNaN(calcPagAtual) ? 1 : calcPagAtual,
  };

  if (resultado === null) {
    next(new NaoEncontrado('Id não localizado'));
  } else if (req.method === 'POST') {
    new SucessPost(resultado).sendResponse(res);
  } else if (req.method === 'PUT') {
    new SucessPut(resultado).sendResponse(res);
  } else if (req.method === 'DELETE') {
    new SucessDelete(resultado).sendResponse(res);
  } else {
    new SucessBase(resultado).sendResponse(res);
  }
}

export default sucess;
