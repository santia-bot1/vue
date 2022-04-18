<template>
  <div id="app" class='container'>
    
    <Cabecera></Cabecera>
    <ListaFrutas></ListaFrutas>
  </div>
</template>

<script>


import ListaFrutas from './components/Lista.vue'
import Cabecera from './components/cabecera.vue'

export default {
  name: 'App',
  components: {
    Cabecera,
    ListaFrutas
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ededed;
  margin-top: 60px;
}
</style>
