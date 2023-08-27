import React, { memo, useState, useRef } from 'react'
import { HeaderWrapper, SectionWrapper } from './style'
import HeaderLeft from './HeaderLeft'
import HeaderCenter from './HeaderCenter'
import HeaderRight from './HeaderRight'
import { useSelector } from 'react-redux'
import useScrollPosition from '@/hooks/useScrollPosition'
import { ThemeProvider } from 'styled-components'

const Header = memo(() => {
  const { headerConfig } = useSelector((state) => ({
    headerConfig: state.main.headerConfig
  }))

  const [isSearch, setIsSearch] = useState(false)
  const { isFixed, topAlpha } = headerConfig
  const { scrollY } = useScrollPosition()
  const prevPosition = useRef(0)
  const isAlpha = topAlpha && scrollY === 0
  if (isSearch && Math.abs(scrollY - prevPosition.current) > 30)
    setIsSearch(false)
  if (!isSearch) prevPosition.current = scrollY
  return (
    <ThemeProvider theme={{ isAlpha }}>
      <HeaderWrapper className={isFixed ? 'fixed' : ''}>
        <div className="wrapper">
          <div className="content">
            <HeaderLeft />
            <HeaderCenter
              isSearch={isAlpha || isSearch}
              handleSearchBtnClick={() => setIsSearch(true)}
            />
            <HeaderRight />
          </div>
          <SectionWrapper isSearch={isAlpha || isSearch}></SectionWrapper>
        </div>
        {isSearch && (
          <div className="cover" onClick={() => setIsSearch(false)}></div>
        )}
      </HeaderWrapper>
    </ThemeProvider>
  )
})

export default Header
