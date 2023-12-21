<template>
  <div class="home__page">
    <HotelList />
  </div>
</template>

<script setup>
import { ref, provide } from 'vue'
import { hotelsData } from './helper'
import HotelList from '@/components/Hotels/HotelsList/HotelsList.vue'

const hotels = ref(hotelsData)
provide('hotels', hotels)
</script>

<style scoped>
.home__page {
  display: flex;
  flex-direction: column;
  place-items: center;
  margin-block: 3rem;
}
</style>
