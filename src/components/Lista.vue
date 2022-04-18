<template>
    <div>
        <ol class="list-group">
        <li v-for="(item , index) of arrayOrdenado" :key="item" @click="aumentar(index)" class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold"> {{index}} - {{item.nombre}}</div>
            
        </div>
        <span class="badge bg-primary rounded-pill">{{item.cantidad}}</span>
        </li>
        <button @click="reiniciar" class="btn btn-danger">Reiniciar</button>
    </ol>
    
    </div>
</template>

<script>
import{mapState,mapMutations} from 'vuex';


export default {
    name: "ListaFrutas",
    computed:{
        ...mapState(['frutas']),
        arrayOrdenado(){
            // eslint-disable-next-line
            return this.frutas.sort((a , b) => b.cantidad - a.cantidad)
        }
    },
    methods:{
        ...mapMutations(['aumentar','reiniciar'])
    }

};
</script>

<style lang="scss" scoped></style>
