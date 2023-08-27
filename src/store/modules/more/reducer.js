// import { CHANGE_PAGE, CHANGE_ROOMLIST, CHANGE_TOTALCOUNT } from './instant'

import * as actionTypes from './instant'

const initState = {
  currentPage: 1,
  roomList: [],
  totalCount: 0,
  isLoading: false
}

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_PAGE:
      return { ...state, currentPage: action.currentPage }
    case actionTypes.CHANGE_ROOMLIST:
      return { ...state, roomList: action.roomList }
    case actionTypes.CHANGE_TOTALCOUNT:
      return { ...state, totalCount: action.totalCount }
    case actionTypes.CHANGE_LOADING:
      return { ...state, isLoading: action.isLoading }
    default:
      return state
  }
}

export default reducer
