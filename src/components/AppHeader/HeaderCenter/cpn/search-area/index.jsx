import React, { memo } from 'react'
import { SearchAreaWrapper } from './style'

const SearchArea = memo((props) => {
  const { searchInfos, currIndex } = props

  return (
    <SearchAreaWrapper>
      <div className="wrap">
        {searchInfos?.[currIndex].map((item, index) => {
          return (
            <div className="wrap-item" key={index}>
              <div className="item">
                <span className="top">{item.title}</span>
                <span className="bottom">{item.desc}</span>
              </div>
            </div>
          )
        })}
      </div>
    </SearchAreaWrapper>
  )
})

export default SearchArea
