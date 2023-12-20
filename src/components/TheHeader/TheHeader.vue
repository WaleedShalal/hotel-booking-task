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
}
header > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
}
</style>
