import SucessBase from "./SucessBase.js";

class SucessPut extends SucessBase {
    constructor (result) {
        super(result, "Registro Atualizado com Sucesso.", 200)
    }

};

export default SucessPut;