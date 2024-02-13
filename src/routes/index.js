import express from "express";
import livroRoutes from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("API em funcionamento"));
    app.use(express.json(), livroRoutes, autores)
}

export default routes;
