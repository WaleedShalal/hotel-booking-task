<template>
  <li v-for="({ name, address, rating }, i) in data" :key="name">
    <figure>
      <img :src="logo" alt="hotel-logo" />
    </figure>
    <div class="hotel__description">
      <h3>{{ name }}</h3>
      <p>{{ address }}</p>
      <span>⭐ ({{ rating }})</span>
      <button @click="handleSelectHotel(data[i])" v-if="path === '/'">
        <span>Book now</span>
      </button>
      <button @click="handleCancelUserBookedHotel(data[i])" v-else>
        <span>Cancel book</span>
      </button>
    </div>
  </li>
  <HotelBookingForm
    :openHotelBooking="openHotelBooking"
    :selectedHotel="selectedHotel"
    :handleCloseHotelBookingForm="handleCloseHotelBookingForm"
  />
</template>

<script setup>
import { inject, ref } from 'vue'
import { useRoute } from 'vue-router'
import logo from '@/assets/logo.svg'
import HotelBookingForm from '@/components/Forms/HotelBookingForm/HotelBookingForm.vue'

const { path } = useRoute()
const data = inject('hotels')
const handleCancelUserBookedHotel = inject('handleCancelUserBookedHotel')
const openHotelBooking = ref(false)
const selectedHotel = ref(null)
const handleSelectHotel = (hotel) => {
  selectedHotel.value = hotel
  openHotelBooking.value = true
}
const handleCancelSelectHotel = (hotel) => {
  selectedHotel.value = hotel
  openHotelBooking.value = true
}
const handleCloseHotelBookingForm = () => (openHotelBooking.value = false)
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
