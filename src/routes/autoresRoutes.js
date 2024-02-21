import express from "express";
import AutorController from "../controllers/autoresController.js";
import paginate from "../middlewares/paginate.js";

const router = express.Router();

router
  .get("/autores", AutorController.listarAutores, paginate)
  .get("/autores/:id", AutorController.listarAutorPorId)
  .post("/autores", AutorController.cadastrarAutor)
  .put("/autores/:id", AutorController.atualizarAutor)
  .delete("/autores/:id", AutorController.excluirAutor)

export default router;   