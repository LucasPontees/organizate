<template>
    <div class="sidebar" id="sidebar">
        <div class="sidebar-inner slimscroll">
            <perfect-scrollbar class="scroll-area" :settings="settings" @ps-scroll-y="scrollHanle">
                <aside
                    :class="`flex flex-col bg-gray-800 text-white min-h-screen p-4 transition-all duration-200 ease-in-out ${
                        is_expanded ? 'w-64' : 'w-16'
                    } overflow-hidden`"
                >
                    <div class="logo mb-4">
                        <img :src="logoURL" alt="Vue" class="w-8" />
                    </div>

                    <div
                        class="flex justify-end mb-4 transition-all duration-200 ease-in-out relative top-0"
                    >
                        <button
                            aria-label="Toggle Sidebar "
                            class="transform transition-all duration-200 ease-in-out"
                            @click="ToggleMenu"
                        >
                            <span
                                class="material-icons text-white text-2xl hover:text-blue-500 transform hover:translate-x-2"
                            >
                                {{
                                    is_expanded
                                        ? 'keyboard_double_arrow_left'
                                        : 'keyboard_double_arrow_right'
                                }}
                            </span>
                        </button>
                    </div>

                    <h3
                        class="text-gray-400 text-sm mb-2 uppercase transition-opacity duration-300 ease-in-out"
                        :class="{ 'opacity-100': is_expanded, 'opacity-0': !is_expanded }"
                    >
                        Menu
                    </h3>

                    <div class="menu space-y-2">
                        <router-link
                            to="/home"
                            class="flex items-center text-white hover:text-blue-500 p-2 transition-all duration-200 ease-in-out rounded-lg hover:bg-gray-700"
                            :class="{
                                'bg-gray-700 border-r-4 border-blue-500 text-blue-500':
                                    $route.path === '/'
                            }"
                        >
                            <span class="material-icons text-2xl">home</span>
                            <span
                                class="ml-4 text transition-opacity duration-200 ease-in-out"
                                :class="{
                                    'opacity-100': is_expanded,
                                    'opacity-0': !is_expanded
                                }"
                                >Home</span
                            >
                        </router-link>
                        <router-link
                            to="/about"
                            class="flex items-center text-white hover:text-blue-500 p-2 transition-all duration-200 ease-in-out rounded-lg hover:bg-gray-700"
                            :class="{
                                'bg-gray-700 border-r-4 border-blue-500 text-blue-500':
                                    $route.path === '/about'
                            }"
                        >
                            <span class="material-icons text-2xl">description</span>
                            <span
                                class="ml-4 text transition-opacity duration-200 ease-in-out"
                                :class="{
                                    'opacity-100': is_expanded,
                                    'opacity-0': !is_expanded
                                }"
                                >About</span
                            >
                        </router-link>
                    </div>

                    <div class="flex-1"></div>

                    <div class="menu">
                        <router-link
                            to="#"
                            class="flex items-center text-white hover:text-blue-500 p-2 transition-all duration-200 ease-in-out rounded-lg hover:bg-gray-700"
                            :class="{
                                'bg-gray-700 border-r-4 border-blue-500 text-blue-500':
                                    $route.path === ''
                            }"
                        >
                            <span class="material-icons text-2xl">settings</span>
                            <span
                                class="ml-4 text transition-opacity duration-200 ease-in-out"
                                :class="{
                                    'opacity-100': is_expanded,
                                    'opacity-0': !is_expanded
                                }"
                                >Settings</span
                            >
                        </router-link>
                    </div>
                </aside>
            </perfect-scrollbar>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import logoURL from '@/assets/logo.png'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

const settings = ref({
    suppressScrollX: true // Correção na ortografia
})

const scrollHanle = () => {}

const is_expanded = ref(localStorage.getItem('is_expanded') === 'true')

const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value
    localStorage.setItem('is_expanded', is_expanded.value)
}
</script>

<style scoped>
.scroll-area {
    position: relative;
    margin: auto;
    width: 100%;
    height: 100vh;
    background-color: transparent !important;
    overflow-x: hidden;
}
</style>
