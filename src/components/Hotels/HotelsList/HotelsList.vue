<template>
  <ul class="hotels__list">
    <HotelItem :data="props.data" :handleCancelUserBookedHotel="handleCancelUserBookedHotel" />
  </ul>
</template>

<script setup>
import HotelItem from '../HotelItem/HotelItem.vue'

const props = defineProps(['data', 'handleCancelUserBookedHotel'])
</script>

<style scoped>
.hotels__list {
  display: flex;
  flex-direction: column;
  list-style: none;
  row-gap: 1.5rem;
}
</style>
