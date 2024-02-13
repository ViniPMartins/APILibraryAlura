import mongoose from "mongoose";
import { autorSchema } from "./autores.js";

const livrosSchema = new mongoose.Schema({
    "id":{type: mongoose.Schema.Types.ObjectId},
    "titulo":{type: String, require: true},
    "editora":{type: String},
    "preco":{type: Number},
    "paginas":{type: Number},
    "autor": autorSchema
}, {versionKey: false});

const livro = mongoose.model("livros", livrosSchema);

export default livro;