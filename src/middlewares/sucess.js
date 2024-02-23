import SucessBase from '../sucess/SucessBase.js';
import NaoEncontrado from '../errors/NaoEncontrado.js';
import SucessPost from '../sucess/SucessPost.js';
import SucessDelete from '../sucess/SucessDelete.js';
import SucessPut from '../sucess/SucessPut.js';

function sucess(req, res, next) {
  const resultado = {
    dados: req.resultado,
    paginaAtual: req.paginaAtual,
    totalPaginas: Math.ceil(req.totalRegistros / req.limiteAtual),
  };

  if (resultado === null) {
    next(new NaoEncontrado('Id não localizado'));
  } else if (req.method === 'POST') {
    new SucessPost(resultado).sendResponse(res);
  } else if (req.method === 'PUT') {
    new SucessPut(resultado).sendResponse(res);
  } else if (req.method === 'DELETE') {
    new SucessDelete().sendResponse(res);
  } else {
    new SucessBase(resultado).sendResponse(res);
  }
}

export default sucess;
