import { createSlice } from '@reduxjs/toolkit'

const favorSlice = createSlice({
  name: 'favor',
  initialState: {
    favorList: []
  },
  reducers: {
    changeFavorList(state, { payload }) {
      state.favorList.push(payload)
    }
  }
})

export default favorSlice.reducer
export const { changeFavorList } = favorSlice.actions
