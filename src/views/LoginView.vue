<template>
  <div class="login__page">
    <LoginForm />
  </div>
</template>

<script setup>
import LoginForm from '@/components/Forms/LoginForm/LoginForm.vue'
</script>

<style scoped>
.login__page {
  display: grid;
  place-items: center;
}
</style>
