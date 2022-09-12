import { createSlice } from '@reduxjs/toolkit'

const postReducer = createSlice({
  name: 'toolkit',
  initialState: {
    posts: [],
    visible: false,
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

    modalOpen(state) {
      state.visible = true
    },

    modalClose(state) {
      state.visible = false
    },
  },
})

export default postReducer.reducer
export const { add, remove, change, modalClose, modalOpen } =
  postReducer.actions
