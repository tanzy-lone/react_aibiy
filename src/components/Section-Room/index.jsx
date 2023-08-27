import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { SectionRoomWrapper } from './style'
import RoomItem from '../room-item'

const SectionRoom = memo((props) => {
  const { goodsList, width } = props

  return (
    <SectionRoomWrapper>
      <ul className="room-item">
        {goodsList?.slice(0, 8).map((item) => {
          return <RoomItem itemData={item} key={item.id} width={width} />
        })}
      </ul>
    </SectionRoomWrapper>
  )
})
SectionRoom.propTypes = {
  goodsList: PropTypes.array,
  width: PropTypes.string
}

export default SectionRoom
