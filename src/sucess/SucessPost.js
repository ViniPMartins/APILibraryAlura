import SucessBase from './SucessBase.js';

class SucessPost extends SucessBase {
  constructor(result) {
    super(result, 'Registro Criado com Sucesso!', 201);
  }
}

export default SucessPost;
