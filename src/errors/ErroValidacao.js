import RequisicaoIncorreta from './RequisicaoIncorreta.js';

class ErroValidacao extends RequisicaoIncorreta {
  constructor(erro) {
    const mensagemErro = Object.values(erro.errors)
      // eslint-disable-next-line no-shadow
      .map((erro) => erro.message)
      .join('; ');
    super(`Os seguintes erros foram encontrados: ${mensagemErro}`);
  }
}

export default ErroValidacao;
