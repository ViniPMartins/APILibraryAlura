import request from 'supertest';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  describe, expect, it, beforeAll, afterAll, test,
} from '@jest/globals';
import app from '../../app.js';

let server;
beforeAll(() => {
  const port = 3001;
  server = app.listen(port);
});

afterAll(() => {
  server.close();
});

describe('Teste http GET em rota /autores', () => {
  it('Deve retornar um lista de autores', async () => {
    await request(app)
      .get('/autores')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

let autorTesteId;

describe('Teste http POST em rota /autores', () => {
  it('Deve retornar status 400 ao passar body vazio', async () => {
    await request(app)
      .post('/autores')
      .send({})
      .expect(400);
  });

  it('Deve retornar status 201 ao cadastrar autor', async () => {
    const response = await request(app)
      .post('/autores')
      .send({
        nome: 'Autor Teste',
        nacionalidade: 'Nacionalidade Teste',
      })
      .expect(201);

    autorTesteId = response.body.result;
    console.log(`Criando autor ${autorTesteId}`);

    expect(response.body.message).toBe('Registro Criado com Sucesso!');
  });
});

describe('Teste HTTP PUT em /autores/id', () => {
  test.each([
    ['nome', { nome: 'Novo Teste' }],
    ['nacionalidade', { nacionalidade: 'Novo Teste' }],
  ])('Deve alterar o campo %s', async (chave, param) => {
    console.log(`Alterando autor ${autorTesteId}`);
    await request(app)
      .put(`/autores/${autorTesteId}`)
      .send(param)
      .expect(200);
  });
});

describe('Teste HTTP DELETE em /autores/id', () => {
  it('Excluir autor teste', async () => {
    console.log(`Excluindo autor ${autorTesteId}`);
    await request(app)
      .delete(`/autores/${autorTesteId}`)
      .expect(200);
  });
});
