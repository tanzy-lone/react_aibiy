import React, { memo } from 'react'
// import { useState } from 'react'
import { SearchTabsWrapper } from './style'

const SearchTabs = memo((props) => {
  // const [currIndex, setCurrIndex] = useState(0)
  const { title, currIndex, tabClick } = props
  const handleItemClick = (index) => {
    if (tabClick) tabClick(index)
  }
  return (
    <SearchTabsWrapper>
      <div className="tabs-list">
        {title?.map((item, index) => {
          return (
            <div
              className="item"
              onClick={() => handleItemClick(index)}
              key={index}
            >
              <span className={`tab ${currIndex === index ? 'active' : ''}`}>
                {item}
              </span>
            </div>
          )
        })}
      </div>
    </SearchTabsWrapper>
  )
})

export default SearchTabs
