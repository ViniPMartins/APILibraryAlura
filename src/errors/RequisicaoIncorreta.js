import ErroBase from './ErroBase.js';

class RequisicaoIncorreta extends ErroBase {
  constructor(message = 'Um ou mais dados fornecidos estão incorretos', status = 400) {
    super(message, status);
  }
}

export default RequisicaoIncorreta;
