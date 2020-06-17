<template>
  <div id="todo">
    <input type="text" placeholder="Digite uma nova tarefa..." v-model="nome">
    <button @click="adicionar">OK</button>
  </div>
</template>

<script>
export default {
name: "TodoForm",
computed: {
  tarefas (){
    return this.$store.state.tarefas
  } 
},
  data: function() {
    return {
      nome: ""
    };
  },
   methods: {
    adicionar: function() {
      this.$store.commit("adicionar", {
        descricao: this.nome
      });
    }
  }
};

</script>

<style>
#todo{
    width: 380px;
    height: 150px;
    border: 6px solid #FFFF;
    margin: 30px auto 10px auto;
 
}
input{
    margin: 60px auto 10px 50px;
}

</style>