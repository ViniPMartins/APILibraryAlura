import express from "express";
import connectDataBase from "./config/dbConnection.js";
import routes from "./routes/index.js"

const connection = await connectDataBase();

connection.on("error", (erro) => {
    console.error("Erro de conexão", erro);
});

connection.once("open", () => {
    console.log("Conexão realizada com sucesso")
})

const app = express();
routes(app)

export default app;