<template>
  <div class="booked__hotelsPage">
    <h1>Booked Hotels List</h1>
    <HotelList
      :data="userBookedHotelsList"
      :handleCancelUserBookedHotel="handleCancelUserBookedHotel"
    />
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import { useStore } from 'vuex'

import HotelList from '@/components/Hotels/HotelsList/HotelsList.vue'

const userBookedHotelsList = ref([])
const store = useStore()
const userEmail = store.getters['auth/userEmail']
store.dispatch('hotels/getUsersHotelBookingInfo')
const usersBookedInfo = computed(() => store.getters['hotels/usersHotelBookingInfo'])

const getUserBookedHotelsList = () => {
  userBookedHotelsList.value = usersBookedInfo.value.filter(
    (userInfo) => userInfo.userEmail === userEmail
  )[0]?.bookedHotels
}

const handleCancelUserBookedHotel = (hotel) => {
  const otherUsersBookingInfo = usersBookedInfo.value.filter(
    (userInfo) => userInfo.userEmail !== userEmail
  )
  const userBookingInfo = usersBookedInfo.value.filter(
    (userInfo) => userInfo.userEmail === userEmail
  )[0]
  const updatedUserBookedHotels = userBookingInfo.bookedHotels.filter(
    (bookedHotel) => bookedHotel.name !== hotel.name
  )
  userBookedHotelsList.value = updatedUserBookedHotels
  store.dispatch('hotels/setUsersHotelBookingInfo', {
    value: [...otherUsersBookingInfo, { ...userBookingInfo, bookedHotels: updatedUserBookedHotels }]
  })
}

onMounted(() => getUserBookedHotelsList())

onBeforeRouteLeave((to, _, next) => {
  const confirmLeavePage = confirm(
    'If you leave you need to login again with same email or diiferent one'
  )
  if (confirmLeavePage) {
    localStorage.removeItem('userBookedEmail')
    next(confirmLeavePage)
  } else next(confirmLeavePage)
})
</script>

<style scoped>
.booked__hotelsPage {
  display: grid;
  grid-row: auto 1fr;
  place-items: center;
  row-gap: 3rem;
  margin-block: 3rem;
}
</style>
