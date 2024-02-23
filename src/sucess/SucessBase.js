/* eslint-disable no-unused-expressions */
class SucessBase {
  constructor(result, message = 'OK', status = 200) {
    this.message = message;
    this.status = status;
    this.paginaAtual = result.paginaAtual;
    this.totalPaginas = result.totalPaginas;
    this.result = result.dados;
  }

  sendResponse(res) {
    res.status(this.status).send({
      message: this.message,
      status: this.status,
      paginaAtual: this.paginaAtual,
      totalPaginas: this.totalPaginas,
      result: this.result,
    });
  }
}

export default SucessBase;
