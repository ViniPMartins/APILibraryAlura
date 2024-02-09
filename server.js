// import http from "http";
import app from "./src/app.js"

const PORT = 3000

// const routes = {
//     '/':'Criando um API',
//     '/livros':'Página Livros',
//     '/autores':'Página autores'
// }

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-type':'text/plain'});;
//     res.end(routes[req.url]);
// });

app.listen(PORT, () => {
    console.log("Escutando porta 3000")
})

