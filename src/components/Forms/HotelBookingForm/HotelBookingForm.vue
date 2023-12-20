<template>
  <HotelBookingSlot v-if="props.openHotelBooking">
    <template #bookingForm>
      <h3>{{ props.selectedHotel }}</h3>
      <form @submit.prevent="handleSubmitUserBookingInfo">
        <div>
          <label for="user-name">User Name:</label>
          <input id="user-name" type="text" v-model.trim="userInfo.userName" />
        </div>
        <div>
          <label for="user-email">User Email:</label>
          <input id="user-email" type="email" v-model.trim="userInfo.userEmail" />
        </div>
        <div>
          <label for="user-phone-number">User Phone Number:</label>
          <input id="user-phone-number" type="number" v-model.trim="userInfo.userPhoneNumber" />
        </div>
        <div class="form__buttons">
          <button @click="handleCloseHotelBookingForm">
            <span>Cancel</span>
          </button>
          <button>
            <span>Submit</span>
          </button>
        </div>
      </form>
    </template>
  </HotelBookingSlot>
</template>

<script setup>
import { reactive } from 'vue'
import HotelBookingSlot from '@/components/Slots/HotelBookingSlot.vue'

const props = defineProps(['openHotelBooking', 'selectedHotel', 'handleCloseHotelBookingForm'])
const userInfo = reactive({
  userName: '',
  userEmail: '',
  userPhoneNumber: ''
})

const handleSubmitUserBookingInfo = () => {
  const { userName, userEmail, userPhoneNumber } = userInfo
  if (userName && userEmail && userPhoneNumber) {
    const bookingUsersInfo = JSON.parse(localStorage.getItem('hotelBookingInfo'))
    const updatedUsersInfo = bookingUsersInfo
      ? [...bookingUsersInfo, { ...userInfo }]
      : [{ ...userInfo }]

    localStorage.setItem('hotelBookingInfo', JSON.stringify(updatedUsersInfo))
    props.handleCloseHotelBookingForm()
  }
}
</script>

<style scoped></style>
