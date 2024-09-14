<template>

  <div class="flex h-screen overflow-hidden">

    <Sidebar />

    <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">

      <Navbar />

      <main class="main-wrapper">
        <div class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
          <router-view />
        </div>
      </main>
    </div>

  </div>
</template>

<script setup>
import Sidebar from '@/layouts/Sidebar.vue';
import Navbar from '@/layouts/Navbar.vue';
</script>

<style lang="scss">
.main-wrapper {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;

  @media (max-width: 1024px) {
    padding-left: 6rem;
  }
}
</style>
