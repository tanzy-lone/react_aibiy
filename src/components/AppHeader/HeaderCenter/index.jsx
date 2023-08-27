import React, { memo, useState } from 'react'
import { CenterWrapper } from './style'
import IconSearch from '@/assets/svg/icon_search'
import SearchTabs from './cpn/search-tabs'
import SearchTitle from '@/assets/data/search_titles.json'
import SearchArea from './cpn/search-area'
import { CSSTransition } from 'react-transition-group'

const HeaderCenter = memo((props) => {
  const [currIndex, setCurrIndex] = useState(0)
  const { isSearch, handleSearchBtnClick } = props
  const title = SearchTitle.map((item) => item.title)
  const searchInfos = SearchTitle.map((item) => item.searchInfos)

  const handleSearchClick = () => {
    if (handleSearchBtnClick) handleSearchBtnClick()
  }

  return (
    <CenterWrapper>
      <CSSTransition
        in={!isSearch}
        unmountOnExit={true}
        timeout={150}
        classNames="bar"
      >
        <div className="search-wrapper" onClick={handleSearchClick}>
          <span className="placehoder">搜索房源和体验</span>
          <div className="icon">
            <IconSearch />
          </div>
        </div>
      </CSSTransition>

      <CSSTransition
        in={isSearch}
        unmountOnExit={true}
        classNames="tabs-section"
        timeout={150}
      >
        <div className="tabs">
          <SearchTabs
            title={title}
            tabClick={setCurrIndex}
            currIndex={currIndex}
          />
          <div className="search-area">
            <SearchArea searchInfos={searchInfos} currIndex={currIndex} />
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  )
})

export default HeaderCenter
