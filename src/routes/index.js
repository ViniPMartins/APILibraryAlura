import express from "express";
import livroRoutes from "./livrosRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("API em funcionamento"));
    app.use(express.json(), livroRoutes)
}

export default routes;
