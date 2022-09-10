import { createSlice } from '@reduxjs/toolkit'
import { cars } from '../pages/newsPage/mock'

const newsReducer = createSlice({
  name: 'newsReducer',
  initialState: {
    news: cars,
    currentCountry: null,
  },
  reducers: {
    all(state) {
      state.news = cars
    },

    sortByCountry(state, action) {
      state.news = cars.filter((n) => n.country == action.payload)
    },

    sortByAlphabet(state, action) {
      state.news = state.news.sort((a, b) => a.brand.localeCompare(b.brand))
    },
  },
})

export default newsReducer.reducer
export const { sortByCountry, sortByAlphabet, all } = newsReducer.actions
