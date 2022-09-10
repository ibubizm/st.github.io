import { createSlice } from '@reduxjs/toolkit'

const postReducer = createSlice({
  name: 'toolkit',
  initialState: {
    posts: [],
    news: [],
  },
  reducers: {
    add(state, action) {
      state.posts.push(action.payload)
    },

    change(state, action) {
      state.posts.forEach((post) => {
        if (post.id == action.payload.id) {
          post.value = action.payload.value
          post.date = action.payload.date
        }
      })
    },

    remove(state, action) {
      state.posts = state.posts.filter((post) => post.id !== action.payload.id)
    },
  },
})

export default postReducer.reducer
export const { add, remove, change } = postReducer.actions
