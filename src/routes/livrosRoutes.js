import express from "express";
import LivroController from "../controllers/livrosController.js";
import paginate from "../middlewares/paginate.js";

const router = express.Router();

router
  .get("/livros", LivroController.listarLivros, paginate)
  .get("/livros/busca", LivroController.listarLivroPorFiltro, paginate)
  .get("/livros/:id", LivroController.listarLivroPorId)
  .post("/livros", LivroController.cadastrarLivro)
  .put("/livros/:id", LivroController.atualizarLivro)
  .delete("/livros/:id", LivroController.excluirLivro)

export default router;   