<template>
  <li v-for="{ name, address, rating } in data" :key="name">
    <figure>
      <img :src="logo" alt="hotel-logo" />
    </figure>
    <div class="hotel__description">
      <h3>{{ name }}</h3>
      <p>{{ address }}</p>
      <span>({{ rating }})</span>
      <button>
        <span>Book now</span>
      </button>
    </div>
  </li>
</template>

<script setup>
import { inject } from 'vue'
import logo from '@/assets/logo.svg'

const data = inject('hotels')
</script>

<style scoped>
li {
  display: flex;
  border: 1px solid hsl(var(--argent));
  border-radius: 0.5rem;
  padding: 2rem 1.5rem;
  column-gap: 1.5rem;
  align-items: flex-start;
}
li figure {
  width: 5rem;
  heigth: 5rem;
  margin-block-end: 0;
}
.hotel__description {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}
.hotel__description h3 {
  font-size: 3rem;
  font-weight: bold;
}
.hotel__description p {
  font-size: 2rem;
}
.hotel__description > span {
  font-size: 1.7rem;
}
.hotel__description button {
  width: fit-content;
  border: 1px solid hsl(var(--argent));
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: hsl(var(--white));
  transition: all 250ms linear;
  cursor: pointer;
}
.hotel__description button:hover {
  border: 1px solid hsl(var(--white));
  background-color: hsl(var(--argent));
}
</style>
