<template>
  <div class="bg-white p-5 rounded shadow-md max-w-lg h-full max-h-100...">
    <h2 class="text-2xl font-bold mb-6 text-gray-700 text-center">Cadastro de Atividade</h2>

    <form action="#" method="POST">
      <!-- Título -->
      <div class="mb-4">
        <label for="titulo" class="block text-gray-700 font-medium mb-2">Título</label>
        <input
          type="text"
          id="titulo"
          name="titulo"
          class="w-full px-4 py-3 bg-gray-100 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Digite o título da atividade"
          required
        />
      </div>

      <!-- Descrição -->
      <div class="mb-4">
        <label for="descricao" class="block text-gray-700 font-medium mb-2">Descrição</label>
        <textarea
          id="descricao"
          name="descricao"
          rows="4"
          class="w-full px-4 py-3 bg-gray-100 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Descreva a atividade"
          required
        ></textarea>
      </div>

      <!-- Status -->
      <div class="mb-4">
        <label for="status" class="block text-gray-700 font-medium mb-2">Status</label>
        <select
          id="status"
          name="status"
          class="w-full px-4 py-3 bg-gray-100 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
          <option value="pendente">Alta</option>
          <option value="concluida">Baixa</option>
          <option value="em_progresso">Média</option>
        </select>
      </div>

      <!-- Botão Enviar -->
      <div class="mb-4">
        <button
          type="submit"
          class="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
        >
          Enviar
        </button>
      </div>
    </form>
  </div>
</template>
