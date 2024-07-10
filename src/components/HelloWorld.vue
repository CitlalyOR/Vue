<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ texto }}</h2> 
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',     //componente
  props: {
    msg: String
  },
  data(){          //propiedad o metodo
    return{       //devuelve las propiedades que quiero mostrar
      texto: "" //cargarlo en una propiedad dentro de mi clase
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
