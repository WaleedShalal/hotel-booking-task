<template>
  <div class="home__page">
    <HotelList :data="data" />
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import HotelList from '@/components/Hotels/HotelsList/HotelsList.vue'

const store = useStore()
store.dispatch('hotels/setHotels')
const data = store.getters['hotels/hotelsList']
</script>

<style scoped>
.home__page {
  display: flex;
  flex-direction: column;
  place-items: center;
  margin-block: 3rem;
}
</style>
