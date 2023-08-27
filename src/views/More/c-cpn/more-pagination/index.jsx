import React, { memo } from 'react'
import { PaginationWrapper } from './style'
import { Pagination } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import {
  changeCurrentPageAction,
  fetchMoreDataAction
} from '@/store/modules/more/createAction'

const MorePagination = memo(() => {
  const { totalCount } = useSelector((state) => ({
    totalCount: state.more.totalCount
  }))

  const count = Math.floor(totalCount / 20)

  const dispatch = useDispatch()
  const handlePageChange = (e, page) => {
    dispatch(changeCurrentPageAction(page))
    dispatch(fetchMoreDataAction())
  }

  return (
    <PaginationWrapper>
      <div className="pagination">
        <Pagination
          count={totalCount && count}
          color="secondary"
          onChange={handlePageChange}
        />
      </div>
    </PaginationWrapper>
  )
})

export default MorePagination
