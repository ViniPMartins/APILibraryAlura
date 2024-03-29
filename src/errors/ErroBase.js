/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */

class ErroBase extends Error {
  constructor(message = 'Erro interno do Servidor', status = 500) {
    super();
    this.message = message;
    this.status = status;
  }

  sendResponse(res) {
    res.status(this.status).send({
      message: this.message,
      status: this.status,
    });
  }
}

export default ErroBase;
