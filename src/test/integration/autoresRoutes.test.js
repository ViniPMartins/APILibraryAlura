import request from 'supertest';
import {
  describe, expect, it, jest,
} from '@jest/globals';
import app from '../../app.js';

let server;
beforeEach(() => {
  const port = 3000;
  server = app.listen(port);
});

afterEach(() => {
  server.close();
});

describe('Teste http GET em rota /autores', () => {
  it('Deve retornar um lista de autores', async () => {
    const response = await request(app)
      .get('/autores')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

let autorTesteId;

describe('Teste http POST em rota /autores', () => {
  it('Deve retornar status 201 ao cadastrar autor', async () => {
    const response = await request(app)
      .post('/autores')
      .send({
        nome: 'Autor Teste',
        nacionalidade: 'Nacionalidade Teste',
      })
      .expect(201);

    autorTesteId = response.body.result._id;

    expect(response.body.message).toBe('Registro Criado com Sucesso!');
  });

  it('Deve retornar status 400 ao passar body vazio', async () => {
    const response = await request(app)
      .post('/autores')
      .send({})
      .expect(400);
  });
});
