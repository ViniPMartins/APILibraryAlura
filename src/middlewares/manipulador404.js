import NaoEncontrado from '../errors/NaoEncontrado.js';

function manipulador404(req, res, next) {
  const erro = new NaoEncontrado();
  next(erro);
}

export default manipulador404;
