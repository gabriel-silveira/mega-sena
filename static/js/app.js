const API = axios.create({
  baseURL: `http://localhost:6060/api/`
})

new Vue({
  delimiters: ['[[',']]'],
  el: '#app',
  data: {
    qtd_numeros: 6,
    qtd_apostas: 1,
    numeros_sorteados: []
  },
  methods: {
    async sortear_numeros() {
      if(this.qtd_numeros > 3 && this.qtd_apostas > 0) {
        const res = await API.get(`jogos/${this.qtd_numeros}/${this.qtd_apostas}`)
        this.numeros_sorteados = res.data
      }
    },
    limpar: function() {
      this.numeros_sorteados = []
    }
  }
})