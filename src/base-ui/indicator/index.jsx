import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
  const { currIndex = 0 } = props
  const contentRef = useRef()

  useEffect(() => {
    // 当前元素
    const currEl = contentRef.current.children[currIndex]
    // console.log(prevEl)
    // 始终保持中间的算法：  currElOffsetLeft + indicatorWidth - contentWidth
    const currElOffsetLeft = currEl.offsetLeft
    const indicatorWidth = currEl.clientWidth / 2
    const contentWidth = contentRef.current.clientWidth / 2
    const contentScroll = contentRef.current.scrollWidth
    let distance = currElOffsetLeft + indicatorWidth - contentWidth

    if (distance < 0) distance = 0
    const totalDistance = contentScroll - contentWidth * 2
    if (distance > totalDistance) distance = totalDistance

    contentRef.current.style.transform = `translate(${-distance}px)`
  }, [currIndex])

  return (
    <IndicatorWrapper>
      <div className="content" ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  )
})

export default Indicator
