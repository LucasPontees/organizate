<template>
    <!-- Main Wrapper -->
    <div class="min-h-screen flex items-center flex-col justify-center bg-cover bg-center">
        <div class="flex flex-row items-center">
            <img src="@/assets/kanoa.png" alt="imagem" class="w-32" />
            <blockquote class="text-2xl font-semibold italic text-center">
                <span
                    class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#7539FF] relative inline-block"
                >
                    <span class="relative text-white">KANOA ERP</span>
                </span>
            </blockquote>
        </div>
        <div
            class="bg-white bg-opacity-80 hover:bg-opacity-90 transition-all rounded-lg shadow-lg p-6 w-full max-w-md"
        >
            <div class="text-center mb-6">
                <h2 class="text-[#7539FF] text-2xl font-bold">Login</h2>
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
                            class="w-full px-4 py-3 bg-gray-100 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#7539FF]"
                        />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-600 text-sm font-semibold mb-2">Senha</label>
                        <input
                            type="password"
                            v-model="password"
                            placeholder="Senha"
                            class="w-full px-4 py-3 bg-gray-100 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#7539FF]"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            class="w-full bg-[#7539FF] text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
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
import { ref } from 'vue'

const user = ref<string>('admin')
const password = ref<string>('admin')

const login = () => {
    if (user.value === 'admin' && password.value === 'admin') {
        window.location.href = '/defaultLayout'
    } else {
        alert('Usuário ou senha inválidos')
    }
}
</script>
