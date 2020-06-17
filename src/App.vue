<template>
  <div id="app">
   <todo-form  @AdicionarTexto="Adicionar($event)"/>
   <tarefas @concluir="Concluir($event)" />
  </div>
</template>

<script>
import tarefas from "./components/tarefas.vue"
import TodoForm from "./components/TodoForm.vue"
export default {
  name: 'App',
  components: {
    TodoForm , tarefas
  } , data: function() {
   return{
     
   }
  } , methods :   {
    // Adicionar: function(event) {
    //   this.tarefas.push({
    //     descricao: event.nome,
    //     cor: event.cor
    //   })
    //   },
      
    }
}
</script>

<style>

</style>
