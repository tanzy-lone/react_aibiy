import React, { memo } from 'react'
import PropTypes from 'prop-types'
import SectionHeader from '@/components/SectionHeader'
import ScrollView from '@/components//ScrollView'
import RoomItem from '@/components/room-item'
import { SectionV3Wrapper } from './style'
import SectionFooter from '@/components/SectionFooter'

const SectionV3 = memo((props) => {
  const { infoData } = props
  return (
    <SectionV3Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <ScrollView>
        <div className="info">
          {infoData.list.map((item) => {
            return (
              <RoomItem width="20%" itemData={item} key={item.id}></RoomItem>
            )
          })}
        </div>
      </ScrollView>
      <SectionFooter name="plus" />
    </SectionV3Wrapper>
  )
})

SectionV3.propTypes = {
  infoData: PropTypes.object
}

export default SectionV3
