<template>
  <HotelBookingSlot v-if="props.openHotelBooking">
    <template #bookingForm>
      <h3>{{ props.selectedHotel.name }}</h3>
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
import { ref } from 'vue'
import HotelBookingSlot from '@/components/Slots/HotelBookingSlot.vue'

const props = defineProps(['openHotelBooking', 'selectedHotel', 'handleCloseHotelBookingForm'])
const userInfo = ref({
  userName: '',
  userEmail: '',
  userPhoneNumber: '',
  bookedHotels: []
})

const handleSubmitUserBookingInfo = () => {
  const { userName, userEmail, userPhoneNumber } = userInfo.value
  if (!userName || !userEmail || !userPhoneNumber) return
  let updatedUsersInfo
  const bookingUsersInfo = JSON.parse(localStorage.getItem('userHotelBookingInfo'))
  if (!bookingUsersInfo)
    updatedUsersInfo = [{ ...userInfo.value, bookedHotels: [props.selectedHotel] }]
  else {
    const recordedUserInfo = bookingUsersInfo.find((userInfo) => userInfo.userEmail === userEmail)
    if (!recordedUserInfo) {
      updatedUsersInfo = [
        ...bookingUsersInfo,
        { ...userInfo.value, bookedHotels: [props.selectedHotel] }
      ]
    } else {
      const recordedUserInfoIndex = bookingUsersInfo.findIndex(
        (userInfo) => userInfo.userEmail === userEmail
      )
      const bookingUsersInfoCopy = [...bookingUsersInfo]
      bookingUsersInfoCopy.splice(recordedUserInfoIndex, 1),
        (updatedUsersInfo = [
          ...bookingUsersInfoCopy,
          {
            ...userInfo.value,
            bookedHotels: [...recordedUserInfo.bookedHotels, props.selectedHotel]
          }
        ])
    }
  }
  localStorage.setItem('userHotelBookingInfo', JSON.stringify(updatedUsersInfo))
  userInfo.value = {
    userName: '',
    userEmail: '',
    userPhoneNumber: '',
    bookedHotels: []
  }
  props.handleCloseHotelBookingForm()
}
</script>

<style scoped></style>
