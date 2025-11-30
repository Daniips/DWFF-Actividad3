<script setup></script>

<template>
  <div>
    <NavbarComponent />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import NavbarComponent from './components/NavbarComponent.vue'
import { RouterView } from 'vue-router'
</script>

<style scoped></style>
