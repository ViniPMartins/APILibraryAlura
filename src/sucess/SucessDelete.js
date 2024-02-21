import SucessBase from "./SucessBase.js";

class SucessDelete extends SucessBase {
    constructor (result) {
        super(result, "Registro Deletado com Sucesso.", 200)
    }

};

export default SucessDelete;