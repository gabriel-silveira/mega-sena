var express = require('express')
var app = express()
var nunjucks = require('nunjucks')

const PATHS = {
  templates: 'views',
  statics: 'static'
}

// templates
nunjucks.configure(PATHS.templates, {
  autoescape: true,
  express: app
})

// arquivos estáticos
app.use(express.static(PATHS.statics))

// API
app.use('/api', require('./src/routes'))

// views
app.get('/', (req, res) => {
  res.render('./index.njk', {
      title: 'Mega-Sena'
  })
})


const port = 6060
app.listen(port, () => { console.log(`Running on ${port}`) })
