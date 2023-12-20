<template>
  <div class="app">
    <DefaultLayout>
      <RouterView />
    </DefaultLayout>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import DefaultLayout from './layouts/DefaultLayout.vue'
</script>

<style scoped></style>
