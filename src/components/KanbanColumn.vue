<template>
    <div class="bg-gray-100 p-4 rounded-lg flex flex-col h-full hover:bg-gray-800">
      <h2 class="text-xl font-semibold mb-4">{{ title }}</h2>
      <div class="flex-1 overflow-auto">
        <KanbanCard v-for="task in tasks" :key="task.id" :task="task" />
      </div>
    </div>
  </template>
  
  <script>
  import KanbanCard from './KanbanCard.vue';
  
  export default {
    name: 'KanbanColumn',
    components: {
      KanbanCard,
    },
    props: {
      title: {
        type: String,
        required: true,
      },
      tasks: {
        type: Array,
        default: () => [],
      },
    },
  };
  </script>
  
  <style scoped>
  /* Adicione estilos específicos do componente aqui, se necessário */
  </style>
  