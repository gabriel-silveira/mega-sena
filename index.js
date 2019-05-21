var express = require('express')
var app = express()
var nunjucks = require('nunjucks')

var MegaSena = require('./src/megasena')

const PATHS = {
  templates: 'views',
  statics: 'static'
}

// arquivos estáticos
app.use(express.static(PATHS.statics))

// templates
nunjucks.configure(PATHS.templates, {
  autoescape: true,
  express: app
})

app.get('/', (req, res) => {
  res.render('./index.html', {
      title: 'Mega-Sena'
  })
})

app.get('/jogos/:games', (req, res) => {
  let games = req.params.games
  const mg = new MegaSena(games)
  res.send(mg.gerarJogo())
})

const port = 6060
app.listen(port, () => { console.log(`Running on ${port}`) })
