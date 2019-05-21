
class MegaSena {
  constructor(jogos) {
    this.jogos = jogos
  }

  static home() {
    '<h1 style="padding:50px;text-align:center">Bora ficar milionário?!</h1>'
  }

  randomNumber() {
    return Math.floor(Math.random() * (61 - 1) + 1)
  }
  
  gerarJogo(max=6) {
    var jogo = []
    while(jogo.length <= max) {
      let num = this.randomNumber()
      if(!jogo.includes(num)) jogo.push(num)
    }
    return jogo
  }
}

module.exports = MegaSena