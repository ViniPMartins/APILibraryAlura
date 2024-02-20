import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: {type: String},
    titulo: {type: String, 
            required: [true, "O campo 'titulo' é obrigatório."]},
    autor: {type: mongoose.Schema.Types.ObjectId, 
            ref: 'autores', 
            required: [true, "O campo 'autor' é obrigatório."]},
    editora: {
      type: String, 
      required: [true, "O campo 'editora' é obrigatório."],
      enum: {
        values: ["Fantasia", "Classicos"],
        message: "O valor {VALUE} não é válido como uma editora"
      }
    },
    numeroPaginas: {
      type: Number,
      validate: {
        validator: (valor) => {return valor >= 10 && valor <= 10000},
        message: "O numero de páginas deve estar entre 10 e 10000. Valor fornecido {VALUE}"
      }
    }
  },
  {
    versionKey: false
  }
);

const livros= mongoose.model('livros', livroSchema);

export default livros;