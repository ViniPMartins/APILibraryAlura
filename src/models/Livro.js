import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: {type: String},
    titulo: {type: String, 
            required: [true, "O campo 'titulo' é obrigatório."]},
    autor: {type: mongoose.Schema.Types.ObjectId, 
            ref: 'autores', 
            required: [true, "O campo 'autor' é obrigatório."]},
    editora: {type: String, 
              required: [true, "O campo 'editora' é obrigatório."]},
    numeroPaginas: {type: Number}
  }
);

const livros= mongoose.model('livros', livroSchema);

export default livros;