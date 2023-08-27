import SectionHeader from '@/components/SectionHeader'
import React, { memo } from 'react'
import { LongWrapper } from './style'
import PropTypes from 'prop-types'
import LongItem from '@/components/LongItem'
import ScrollView from '@/components/ScrollView'

const HomeLongFor = memo((props) => {
  const { infoData } = props
  return (
    <LongWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <ScrollView>
        {infoData.list?.map((item) => {
          return <LongItem itemData={item} key={item.city} />
        })}
      </ScrollView>
    </LongWrapper>
  )
})

HomeLongFor.propTypes = {
  infoData: PropTypes.object
}

export default HomeLongFor
