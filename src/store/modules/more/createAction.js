import { fetchMoreData } from '@/service/modules/more'
import * as actionTypes from './instant'

export const changeCurrentPageAction = (currentPage) => {
  return {
    type: actionTypes.CHANGE_PAGE,
    currentPage
  }
}

const changeListAction = (roomList) => {
  return {
    type: actionTypes.CHANGE_ROOMLIST,
    roomList
  }
}

const changeTotalCountAction = (totalCount) => {
  return {
    type: actionTypes.CHANGE_TOTALCOUNT,
    totalCount
  }
}

export const changeLoading = (isLoading) => {
  return {
    type: actionTypes.CHANGE_LOADING,
    isLoading
  }
}

export const fetchMoreDataAction = () => {
  return async (dispatch, getState) => {
    const currentPage = getState().more.currentPage
    dispatch(changeLoading(true))
    const res = await fetchMoreData(currentPage * 20)
    dispatch(changeLoading(false))
    const roomList = res.list
    const totalCount = res.totalCount
    dispatch(changeListAction(roomList))
    dispatch(changeTotalCountAction(totalCount))
  }
}
