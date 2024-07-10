<template> 
    <div class="mi-componente"> <!--clase situada en codigo script-->

            <h2 v-if="isVisible">{{ message }}</h2> <!--(boleano), si es verdadero se muestra y si es falso no se muestra -->
            <button v-on:click="$event => isVisible = !isVisible">Mostrar</button>      <!--Permite ejecutar el boton que muestra y oculta-->
             <!--Permite ejecutar el boton que muestra y oculta como en la linea 5
                <button v-on:click="isVisible = !isVisible">BOTON</button>
             -->
            <h1 v-bind:class= "{ highlighted: isHighlighted }">{{ title }}</h1>         <!--Aqui se agrega la directiva, con la clase hightlighted con su valor: isHightlighted. se determina: title.-->
            <button click="toggleHighlight">Cambia color</button>     <!--cambia de color y se ejecuta el metodo-->
            
            <button @click="sayHello">Alerta</button>       <!--Al ejecutar la funcion del boton, se muestra la alerta-->

            <input v-model="message">       <!--crea un enlace bidireccinal entre un input y una propiedad de datos, se muestra tal cual el mensaje-->

            <ul>
                <li v-for="item in list" :key="item.id"> {{ item.text }}</li> <!--Permite renderizar una lista de elementos basada en un arreglo.-->
            </ul>
    </div>    
</template>

<!--se agrega el estilo-->
<style scoped>
.highlighted {
    color: plum;
}
</style>

<script>    
export default {
    name:'MiComponente',        //Nombre de mi componente
    data() {                    //propiedad o metodo 
        return {                //devuelve a la vista lo que quiero mostrar
            message: 'Hola',     //Se define la propiedad de datos                               // la propiedad subtitulo, se actualiza con el v-model
            title: 'Cambio de color',        //elemento:titulo
            isHighlighted:false,              //propiedad= Highlighted
            isVisible: true,                    // se puede aplicar a los elementos de las plantillas 
            list: [
                { id: 1, text: 'Primer item' },
                { id: 1, text: 'Segundo item' },
                { id: 1, text: 'Tercer item' }
            ]                     
        }
    },
methods : {
    sayHello() {
        alert('Hola!');
    },
    toggleHighlight() {
        this.isHighlighted = !this.isHighlighted;
    },
    toggleVisibility() {
        this.isVisibility = !this.isVisible;
    }
}
}
</script>