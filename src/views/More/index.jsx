import { changeHeaderConfigAction } from '@/store/modules/main'
import { fetchMoreDataAction } from '@/store/modules/more/createAction'
import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Filter from './c-cpn/more-filter'
import MorePagination from './c-cpn/more-pagination'
import MoreRooms from './c-cpn/more-rooms'
import { MoreWrapper } from './style'

const index = memo(() => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMoreDataAction())
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: false }))
  }, [dispatch])

  return (
    <MoreWrapper>
      <Filter />
      <MoreRooms />
      <MorePagination />
    </MoreWrapper>
  )
})

export default index
