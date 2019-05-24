
class MegaSena {
  constructor(qtd_numeros, qtd_apostas) {
    this.qtd_numeros = qtd_numeros
    this.qtd_apostas = qtd_apostas
  }

  static home() {
    '<h1 style="padding:50px;text-align:center">Bora ficar milionário?!</h1>'
  }

  randomNumber() {
    return Math.floor(Math.random() * (61 - 1) + 1)
  }

  gerarJogos() {
    let jogos = []
    for(let j = 1; j <= this.qtd_apostas; j++)
      jogos.push(this.gerarJogo())
    return jogos
  }
  
  gerarJogo() {
    
    let jogo = []

    while(jogo.length < this.qtd_numeros) {
      let num = this.randomNumber()
      if(!jogo.includes(num)) jogo.push(("0"+num).slice(-2))
    }

    return jogo.sort()
  }
}

module.exports = MegaSena