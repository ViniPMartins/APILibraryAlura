import mongoose from "mongoose";

// mongoose.Error.ValidationError

function manipuladorErros (erro, req, res, next) {
    if (erro instanceof mongoose.Error.CastError) {
        res.status(400).send({message: "Um ou mais dados fornecidos estão incorretos"});
    } else if (erro instanceof mongoose.Error.ValidationError) {
        const mensagemErro = Object.values(erro.errors)
                                .map( erro => erro.message)
                                .join("; ")
        res.status(400).send({message: `Os seguintes erros foram encontrados: ${mensagemErro}`})
    } else {
        res.status(500).send({message: "Erro interno do servidor"});
    }
};

export default manipuladorErros;