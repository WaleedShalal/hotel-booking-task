<template>
  <ul class="hotels__list">
    <HotelItem />
  </ul>
</template>

<script setup>
import HotelItem from '../HotelItem/HotelItem.vue'
</script>

<style scoped>
.hotels__list {
  display: flex;
  flex-direction: column;
  list-style: none;
  row-gap: 1.5rem;
}
</style>
