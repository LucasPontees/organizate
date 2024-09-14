<template>
  <!-- Main Wrapper -->
  <div class="min-h-screen flex items-center justify-center bg-cover bg-center">
    <div
      class="bg-white bg-opacity-80 hover:bg-opacity-90 transition-all rounded-lg shadow-lg p-6 w-full max-w-md"
    >
      <div class="text-center mb-6">
        <h2 class="text-teal-600 text-2xl font-bold">Login</h2>
      </div>
      <div>
        <form @submit.prevent="login">
          <div class="mb-4">
            <label class="block text-gray-600 text-sm font-semibold mb-2"
              >Usuário</label
            >
            <input
              type="text"
              v-model="user"
              placeholder="Usuário"
              class="w-full bg-gray-100 rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-600 text-sm font-semibold mb-2"
              >Senha</label
            >
            <input
              type="password"
              v-model="password"
              placeholder="Senha"
              class="w-full bg-gray-100 rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <button
              type="submit"
              class="w-full bg-gray-800 text-white font-bold py-3 rounded-md hover:bg-teal-700 transition-all"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Main Wrapper -->
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const user = ref<string>('admin');
  const password = ref<string>('admin');

  const login = () => {
    if (user.value === 'admin' && password.value === 'admin') {
      window.location.href = '/defaultLayout';
    } else {
      alert('Usuário ou senha inválidos');
    }
  };
</script>
