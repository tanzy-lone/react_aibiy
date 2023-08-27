import { createSlice } from '@reduxjs/toolkit'

const detailSlice = createSlice({
  name: 'detail',
  initialState: {
    detailInfos: {}
  },
  reducers: {
    changeDetailInfo(state, { payload }) {
      state.detailInfos = payload
    }
  }
})

export default detailSlice.reducer
export const { changeDetailInfo } = detailSlice.actions
