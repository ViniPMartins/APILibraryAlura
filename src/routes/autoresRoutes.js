import express from "express";
import AutorController from "../controller/autorController.js";

const routes = express.Router();

routes.get("/autores", AutorController.ListarAutores);
routes.get("/autores/:id", AutorController.BuscarAutorPorId);
routes.post("/autores", AutorController.AdicionarAutores);
routes.put("/autores/:id", AutorController.AtualizarAutorPorId);
routes.delete("/autores/:id", AutorController.DeletarAutorPorId);

export default routes;