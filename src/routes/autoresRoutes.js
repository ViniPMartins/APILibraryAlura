import express from "express";
import AutorController from "../controllers/autoresController.js";
import paginate from "../middlewares/paginate.js";
import sucess from "../middlewares/sucess.js";

const router = express.Router();

router
  .get("/autores", AutorController.listarAutores, paginate, sucess)
  .get("/autores/:id", AutorController.listarAutorPorId, sucess)
  .post("/autores", AutorController.cadastrarAutor, sucess)
  .put("/autores/:id", AutorController.atualizarAutor, sucess)
  .delete("/autores/:id", AutorController.excluirAutor, sucess)

export default router;   