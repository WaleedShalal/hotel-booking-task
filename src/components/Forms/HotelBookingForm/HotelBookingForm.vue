<template>
  <HotelBookingSlot v-if="props.openHotelBooking || openGreetings">
    <template #bookingForm v-if="props.openHotelBooking">
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
    <template #hotelGreetings v-if="openGreetings">
      <h3>Thank you for booking with us</h3>
      <div class="greetings__button">
        <button @click="openGreetings = false">
          <span>Cancel</span>
        </button>
      </div>
    </template>
  </HotelBookingSlot>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import HotelBookingSlot from '@/components/Slots/HotelBookingSlot.vue'

const props = defineProps(['openHotelBooking', 'selectedHotel', 'handleCloseHotelBookingForm'])
const userInfo = ref({
  userName: '',
  userEmail: '',
  userPhoneNumber: '',
  bookedHotels: []
})
const openGreetings = ref(false)
const store = useStore()

const handleSubmitUserBookingInfo = () => {
  const { userName, userEmail, userPhoneNumber } = userInfo.value
  if (!userName || !userEmail || !userPhoneNumber) return
  openGreetings.value = true
  store.dispatch('hotels/getUsersHotelBookingInfo')
  const bookingUsersInfo = store.getters['hotels/usersHotelBookingInfo']
  let updatedUsersInfo
  if (!bookingUsersInfo) {
    updatedUsersInfo = [{ ...userInfo.value, bookedHotels: [props.selectedHotel] }]
  } else {
    const recordedUserInfo = bookingUsersInfo.find((userInfo) => userInfo.userEmail === userEmail)
    if (!recordedUserInfo) {
      updatedUsersInfo = [
        ...bookingUsersInfo,
        { ...userInfo.value, bookedHotels: [props.selectedHotel] }
      ]
    } else {
      const otherdBookingUsersInfo = bookingUsersInfo.filter(
        (userInfo) => userInfo.userEmail !== userEmail
      )
      const updatedRecordedUserInfoBookedHotels = recordedUserInfo.bookedHotels.filter(
        (bookedHotel) => bookedHotel.name !== props.selectedHotel.name
      )
      updatedUsersInfo = [
        ...otherdBookingUsersInfo,
        {
          ...userInfo.value,
          bookedHotels: [...updatedRecordedUserInfoBookedHotels, props.selectedHotel]
        }
      ]
    }
  }
  store.dispatch('hotels/setUsersHotelBookingInfo', { value: updatedUsersInfo })
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
