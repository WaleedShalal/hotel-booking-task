<template>
  <div class="default__layout">
    <TheHeader />
    <main>
      <slot></slot>
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import TheHeader from '@/components/TheHeader/TheHeader.vue'
import TheFooter from '@/components/TheFooter/TheFooter.vue'
</script>

<style scoped>
.default__layout {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  place-items: center;
}
</style>
