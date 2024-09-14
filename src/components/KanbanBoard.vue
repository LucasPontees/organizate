<template>
    <div class="container mx-auto p-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <KanbanColumn v-for="(tasks, key) in columns" :key="key" :title="key" :tasks="tasks" />
        </div>
    </div>
</template>

<script>
import KanbanColumn from './KanbanColumn.vue'

export default {
    name: 'KanbanBoard',
    components: {
        KanbanColumn
    },
    data() {
        return {
            columns: {
                Novas: [
                    { id: 1, title: 'Tarefa 1', description: 'Descrição da tarefa 1' },
                    { id: 2, title: 'Tarefa 2', description: 'Descrição da tarefa 2' }
                ],
                Andamento: [{ id: 3, title: 'Tarefa 3', description: 'Descrição da tarefa 3' }],
                Deletadas: [],
                Finalizadas: [{ id: 4, title: 'Tarefa 4', description: 'Descrição da tarefa 4' }]
            }
        }
    }
}
</script>

<style scoped>
/* Adicione estilos específicos do componente aqui, se necessário */
</style>
