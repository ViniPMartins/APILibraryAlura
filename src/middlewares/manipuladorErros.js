import mongoose from "mongoose";
import ErroBase from "../errors/ErroBase.js"
import RequisicaoIncorreta from "../errors/RequisicaoIncorreta.js";
import ErroValidacao from "../errors/ErroValidacao.js";
import NaoEncontrado from "../errors/NaoEncontrado.js";

function manipuladorErros (erro, req, res, next) {
    if (erro instanceof mongoose.Error.CastError) {
        new RequisicaoIncorreta().sendResponse(res);
    } else if (erro instanceof mongoose.Error.ValidationError) {
        new ErroValidacao(erro).sendResponse(res)
    } else if (erro instanceof NaoEncontrado) {
        erro.sendResponse(res)
    } else {
        new ErroBase().sendResponse(res);
    }
};

export default manipuladorErros;