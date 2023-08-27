import React, { memo, useState } from 'react'
import { TabsWrapper } from './style'
import PropTypes from 'prop-types'

import ScrollView from '../ScrollView'

const SectionTabs = memo((props) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const { tabs = [], handleInfo } = props

  function handleClick(index, name) {
    setCurrentIndex(index)
    handleInfo(name)
  }

  return (
    <TabsWrapper>
      <ScrollView>
        {tabs.slice(0, 8).map((item, index) => {
          return (
            <div
              className={`item ${currentIndex === index ? 'active' : ''}`}
              key={index}
              onClick={() => handleClick(index, item)}
            >
              {item}
            </div>
          )
        })}
      </ScrollView>
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabs: PropTypes.array,
  handleInfo: PropTypes.func
}

export default SectionTabs
