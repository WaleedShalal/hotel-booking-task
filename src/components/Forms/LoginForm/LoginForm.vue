<template>
  <h3>Login with email which you booked with</h3>
  <form @submit.prevent="handleLogin">
    <div>
      <label for="user-email">User Email:</label>
      <input id="user-email" type="email" v-model.trim="userEmail" />
    </div>
    <div class="form__buttons">
      <button>
        <span>Login</span>
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const userEmail = ref('')

const handleLogin = () => {
  if (!userEmail.value) return
  localStorage.setItem('userBookedEmail', userEmail.value)
  router.push({ name: 'bookedHotels' })
}
</script>

<style scoped>
h3 {
  margin-block-end: 3rem;
  font-size: 3rem;
}
form {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
  font-size: 2rem;
  border: 1px solid hsl(var(--argent));
  border-radius: 0.5rem;
  padding: 3rem;
}
form > div {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
form label {
  padding-inline-end: 2rem;
}
form input {
  flex-grow: 1;
  padding: 0.75rem 2rem;
  border: 1px solid hsl(var(--argent));
  border-radius: 0.5rem;
}
.form__buttons button {
  background-color: hsl(var(--white));
  border: 1px solid hsl(var(--argent));
  border-radius: 0.3rem;
  padding: 1rem;
  cursor: pointer;
  transition: all 250ms linear;
  color: hsl(var(--blue));
}
.form__buttons button:first-child:hover {
  color: hsl(var(--white));
  background-color: hsl(var(--blue));
}
</style>
