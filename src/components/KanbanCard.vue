<template>
    <div class="bg-white p-4 shadow-md rounded-lg mb-4 hover:bg-gray-100">
      <h3 class="text-lg font-semibold">{{ task.title }}</h3>
      <p class="text-gray-600">{{ task.description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'KanbanCard',
    props: {
      task: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Adicione estilos específicos do componente aqui, se necessário */
  </style>
  