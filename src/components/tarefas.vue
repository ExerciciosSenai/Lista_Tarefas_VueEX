<template>
  <div id="caixa">
    <div
      class="tarefas"
      v-for="(tarefa, index) in tarefas"
      :key="index"
      :class="{concluido: !tarefa.pendente, pendente: tarefa.pendente}"
      @click="concluir(tarefa)"
    >{{tarefa.descricao}}</div>
  </div>
</template>

<script>
export default {
  name: "caixa",
  computed: {
    tarefas() {
      return this.$store.state.tarefas;
    }
  }, methods: {
    concluir: function(tarefa){
    this.$store.commit("Ok",tarefa )
    }
  }
};
</script>

<style>
#caixa {
  color: #fff;
  display: flex;
  width: 800px;
  height: 200px;
  border: 1px solid #fff;
  margin: 50px auto 0 auto;
  flex-wrap: wrap;
}
.tarefas {
  width: 150px;
  height: 30px;
  border: 1px solid #fff;
  margin: 10px 0 0 10px;
  text-align: center;
  line-height: 30px;
  user-select: none;
  cursor: pointer;
}
.concluido {
  background: green;
}
.pendente {
  background: red;
}
</style>