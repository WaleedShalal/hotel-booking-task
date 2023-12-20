<template>
  <header>
    <div>
      <figure>
        <img :src="Logo" alt="logo" />
      </figure>
      <nav>
        <ul class="nav__list">
          <li v-for="{ name, path } in navs" :key="name">
            <RouterLink :to="path">
              {{ name }}
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'

import Logo from '@/assets/logo.svg'
const navs = [
  { name: 'Home', path: '/' },
  { name: 'Booked Hotels', path: '/booked-hotels' }
]
</script>

<style scoped>
header {
  width: 100%;
  background-color: hsl(var(--black));
}
header > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
}
header figure {
  width: 5rem;
  height: 5rem;
  margin-block-end: 0;
}
header figure img {
  width: 100%;
  height: 100%;
}

header nav {
  flex-grow: 1;
}
.nav__list {
  display: flex;
  justify-content: center;
  list-style: none;
  column-gap: 3rem;
}
.nav__list > li a {
  text-decoration: none;
  font-size: 3rem;
  color: hsla(var(--white), 0.5);
  font-weight: bold;
}
.nav__list > li a.router-link-exact-active {
  text-decoration: underline;
  color: hsl(var(--white));
}
</style>
