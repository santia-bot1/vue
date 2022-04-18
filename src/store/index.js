import { createStore } from 'vuex'

export default createStore({
  state: {
    frutas: [
      {nombre:'Manzana', cantidad:0},
      {nombre:'Pera', cantidad:0},
      {nombre:'Uva', cantidad:0},
    ]
  },
  getters: {
  },
  mutations: {
    aumentar(state,index){
      state.frutas[index].cantidad ++
      
    },
    reiniciar(state){
      state.frutas.forEach(elemento=> {
        elemento.cantidad = 0
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
