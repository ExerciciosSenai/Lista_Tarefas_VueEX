import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tarefas: []
        
    },
    mutations: {
        adicionar(state, tarefa) {
            state.tarefas.push({
                descricao: tarefa.descricao,
                pendente: true
            })
        } ,
        Ok(state , tarefa ){
            tarefa.pendente=!tarefa.pendente
            let indice = state.tarefas.indexOf(tarefa)
            state.tarefas[indice] = tarefa
        }
    },
    actions: {
    },
    modules: {
    }
})