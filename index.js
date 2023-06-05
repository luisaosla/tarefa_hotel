const express = require('express');
const server = express();
const quartos = require('./src/data/quartos.json');

// Rota GET para obter todos os quartos
server.get('/quartos', (req, res) => {
  return res.json(quartos);
});

// Rota POST para adicionar um novo quarto
server.post('/add', (req, res) => {
  const body = req.body;

  if (!body) {
    // Se não houver corpo na requisição, retorna status 400 (Bad Request)
    return res.status(400).end();
  }

  // Adiciona o novo quarto ao array de quartos
  quartos.push(body);
  
  // Retorna o novo quarto como resposta
  return res.json(body);
});

// Inicia o servidor na porta 3000
server.listen(3000, () => {
  console.log('O servidor está funcionando');
});

// Rota DELETE para excluir um quarto específico
server.delete('/quartos/:id', (req, res) => {
  const id = req.params.id;
  
  // Lógica para excluir o item com o ID fornecido
  // ...

  // Retorna uma mensagem de sucesso após a exclusão
  res.send('Item excluído com sucesso!');
});
