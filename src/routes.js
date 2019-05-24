var express = require('express')
const routes = express.Router()

var MegaSena = require('./megasena')

routes.get('/jogos/:qtd_numeros/:qtd_apostas', (req, res) => {
  let qtd_numeros = req.params.qtd_numeros
  let qtd_apostas = req.params.qtd_apostas
  const mg = new MegaSena(qtd_numeros, qtd_apostas)
  res.send(mg.gerarJogos())
})

module.exports = routes