import React, { memo } from 'react'
import SectionRoom from '@/components/Section-Room'
import SectionHeader from '@/components/SectionHeader'
import { SectionWrapper } from './style'
import PropTypes from 'prop-types'
import SectionFooter from '@/components/SectionFooter'

const HomeSection = memo((props) => {
  const { infoList } = props
  return (
    <SectionWrapper>
      <SectionHeader title={infoList?.title} subtitle={infoList?.subtitle} />
      <SectionRoom goodsList={infoList?.list?.slice(0, 8)} width="25%" />
      <SectionFooter />
    </SectionWrapper>
  )
})

HomeSection.propTypes = {
  infoList: PropTypes.object
}

export default HomeSection
