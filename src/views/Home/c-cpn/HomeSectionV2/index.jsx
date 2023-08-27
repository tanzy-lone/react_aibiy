import React, { memo, useState, useCallback } from 'react'
import { SectionWrapper } from './style'
import SectionHeader from '@/components/SectionHeader'
import SectionRoom from '@/components/Section-Room'
import SectionTabs from '@/components/Section-Tabs'
import PropTypes from 'prop-types'
import SectionFooter from '@/components/SectionFooter'

const HomeSectionV2 = memo((props) => {
  const { infoData } = props
  // useState定义的初始值只有在第一次渲染的时候有效
  // const initName = Object.keys(infoData.dest_list ?? {})[0] ?? ''
  const initName = Object.keys(infoData.dest_list ?? {})[0]

  const [name, setName] = useState(initName)
  const handleInfo = useCallback((name) => {
    setName(name)
  }, [])
  const tabsName = infoData.dest_address?.map((item) => item.name)
  return (
    <SectionWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />

      <SectionTabs tabs={tabsName} handleInfo={handleInfo} />

      <SectionRoom goodsList={infoData.dest_list?.[name]} width="33.33%" />

      <SectionFooter name={name} />
    </SectionWrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV2
