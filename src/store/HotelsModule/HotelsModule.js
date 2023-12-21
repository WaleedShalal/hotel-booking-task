import { hotelsData } from './helper'

export const HotelsModule = {
  namespaced: true,
  state() {
    return {
      hotelsList: [],
      usersHotelBookingInfo: null
    }
  },
  actions: {
    setHotels: ({ commit }) => commit('setHotels', { hotels: hotelsData }),
    setUsersHotelBookingInfo: ({ commit }, payload) => commit('setUsersHotelBookingInfo', payload),
    getUsersHotelBookingInfo: ({ commit }) => commit('getUsersHotelBookingInfo')
  },
  mutations: {
    setHotels: (state, { hotels }) => (state.hotelsList = hotels),
    setUsersHotelBookingInfo: (state, { value }) => {
      state.usersHotelBookingInfo = value
      localStorage.setItem('usersHotelBookingInfo', JSON.stringify(value))
    },
    getUsersHotelBookingInfo: (state) => {
      state.usersHotelBookingInfo = JSON.parse(localStorage.getItem('usersHotelBookingInfo'))
    }
  },
  getters: {
    hotelsList: ({ hotelsList }) => hotelsList,
    usersHotelBookingInfo: ({ usersHotelBookingInfo }) => usersHotelBookingInfo
  }
}
