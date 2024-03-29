import mongoose from 'mongoose';
import ErroBase from '../errors/ErroBase.js';
import RequisicaoIncorreta from '../errors/RequisicaoIncorreta.js';
import ErroValidacao from '../errors/ErroValidacao.js';

// eslint-disable-next-line no-unused-vars
function manipuladorErros(erro, req, res, next) {
  if (erro instanceof mongoose.Error.CastError) {
    new RequisicaoIncorreta().sendResponse(res);
  } else if (erro instanceof mongoose.Error.ValidationError) {
    new ErroValidacao(erro).sendResponse(res);
  } else if (erro instanceof ErroBase) {
    erro.sendResponse(res);
  } else {
    console.log(erro);
    new ErroBase().sendResponse(res);
  }
}

export default manipuladorErros;
