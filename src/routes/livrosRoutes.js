import express from "express";
import LivroController from "../controller/livroController.js";

const routes = express.Router();

routes.get("/livros", LivroController.ListarLivros);
routes.get("/livros/buscar", LivroController.BuscarLivroPorEditora)
routes.get("/livros/:id", LivroController.BuscarLivroPorId);
routes.post("/livros", LivroController.AdicionarLivros);
routes.put("/livros/:id", LivroController.AtualizarLivroPorId);
routes.delete("/livros/:id", LivroController.DeletarLivroPorId);

export default routes;