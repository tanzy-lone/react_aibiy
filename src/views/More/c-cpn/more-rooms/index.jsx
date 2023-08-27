import RoomItem from '@/components/room-item'
import React, { memo, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { RoomWrapper } from './style'
import { changeDetailInfo } from '@/store/modules/detail'
import { useNavigate } from 'react-router-dom'

const MoreRooms = memo(() => {
  const { roomList, totalCount, isLoading } = useSelector(
    (state) => ({
      roomList: state.more.roomList,
      totalCount: state.more.totalCount,
      isLoading: state.more.isLoading
    }),
    shallowEqual
  )

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const itemClick = useCallback(
    (item) => {
      dispatch(changeDetailInfo(item))
      navigate('/detail')
    },
    [dispatch, navigate]
  )

  return (
    <RoomWrapper>
      <h2 className="title">共有{totalCount}条数据</h2>
      <div className="list">
        {roomList?.map((item) => {
          return (
            <RoomItem
              itemData={item}
              width="20%"
              itemClick={itemClick}
              key={item._id}
            ></RoomItem>
          )
        })}
      </div>
      {isLoading && <div className="cover"></div>}
    </RoomWrapper>
  )
})

export default MoreRooms
