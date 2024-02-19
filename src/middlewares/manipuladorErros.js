import mongoose from "mongoose";
import ErroBase from "../Errors/ErroBase.js"
import RequisicaoIncorreta from "../Errors/RequisicaoIncorreta.js";
import ErroValidacao from "../Errors/ErroValidacao.js";

function manipuladorErros (erro, req, res, next) {
    if (erro instanceof mongoose.Error.CastError) {
        new RequisicaoIncorreta().sendResponse(res);
    } else if (erro instanceof mongoose.Error.ValidationError) {
        new ErroValidacao(erro).sendResponse(res)
    } else {
        new ErroBase().sendResponse(res);
    }
};

export default manipuladorErros;