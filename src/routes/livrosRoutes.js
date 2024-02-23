import express from 'express';
import LivroController from '../controllers/livrosController.js';
import paginate from '../middlewares/paginate.js';
import sucess from '../middlewares/sucess.js';

const router = express.Router();

router
  .get('/livros', LivroController.listarLivros, paginate, sucess)
  .get('/livros/busca', LivroController.listarLivroPorFiltro, paginate, sucess)
  .get('/livros/:id', LivroController.listarLivroPorId, sucess)
  .post('/livros', LivroController.cadastrarLivro, sucess)
  .put('/livros/:id', LivroController.atualizarLivro, sucess)
  .delete('/livros/:id', LivroController.excluirLivro, sucess);

export default router;
