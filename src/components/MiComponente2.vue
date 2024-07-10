<template> 
    <div id="mi-componente2">
            <h1> Esto es una prueba de mi componente 2</h1>
            <h2> {{ subtitulo2 }} </h2>
    </div>    
</template>

<script>    //aqui va todo el codigo de Vue
export default {
    name:'MiComponente2',        //Nombre de mi componente
    data() {                    //propiedad o metodo 
        return {                //devuelve a la vista lo que quiero mostrar
            subtitulo2: 'Sub del componente2'     //Puedo crear propieddes, y estas seran mostradas desde  las dobles llaves{{ }} en el h2
        }
    }
}
</script>
