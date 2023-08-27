import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  fetchDiscount,
  fetchGoodsList,
  fetchHightScore,
  fetchHomeLongFor,
  fetchHomePlusData,
  fetchHomeRecommend
} from '@/service'

export const goodsPriceInfoAsync = createAsyncThunk(
  'fetchData',
  (payload, { dispatch, getState }) => {
    fetchGoodsList().then((res) => {
      dispatch(changeGoodsPriceInfoAction(res))
    })

    fetchHightScore().then((res) => {
      dispatch(changeHightScore(res))
    })

    fetchDiscount().then((res) => {
      dispatch(changeDiscount(res))
    })

    fetchHomeRecommend().then((res) => {
      dispatch(changeRecommend(res))
    })
    fetchHomeLongFor().then((res) => {
      dispatch(changeLongFor(res))
    })
    fetchHomePlusData().then((res) => {
      dispatch(changePlusData(res))
    })
    // dispatch(changeGoodsPriceInfoAction(res))
    // return res
  }
)

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodsPriceInfo: {},
    hightScore: {},
    discount: {},
    recommendList: {},
    longfor: {},
    plusData: {}
  },
  reducers: {
    changeGoodsPriceInfoAction(state, { payload }) {
      state.goodsPriceInfo = payload
    },
    changeHightScore(state, { payload }) {
      state.hightScore = payload
    },
    changeDiscount(state, { payload }) {
      state.discount = payload
    },
    changeRecommend(state, { payload }) {
      state.recommendList = payload
    },
    changeLongFor(state, { payload }) {
      state.longfor = payload
    },
    changePlusData(state, { payload }) {
      state.plusData = payload
    }
  },
  // extraReducers: {
  //   [goodsPriceInfoAsync.fulfilled](state, { payload }) {
  //     state.goodsPriceInfo = payload
  //   }
  // }
  extraReducers: (builder) => {
    builder.addCase(goodsPriceInfoAsync.fulfilled, (state, { payload }) => {
      state.goodsPriceInfo = payload
    })
  }
})

export const {
  changeGoodsPriceInfoAction,
  changeHightScore,
  changeDiscount,
  changeRecommend,
  changeLongFor,
  changePlusData
} = homeSlice.actions
export default homeSlice.reducer
