import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import React, { memo, useEffect, useState, useRef } from 'react'
import { ScrollWrapper } from './style'

const ScrollView = memo((props) => {
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)
  const totalDistance = useRef()
  const [positionIndex, setPositionIndex] = useState(0)
  const scrollRef = useRef()

  useEffect(() => {
    const scrollWidth = scrollRef.current.scrollWidth //一共可以滚动的宽度
    const scrollClient = scrollRef.current.clientWidth //自身占据宽度
    const totalScroll = scrollWidth - scrollClient //还可以滚动的宽度
    setShowRight(totalScroll > 0)
    totalDistance.current = totalScroll
  }, [props.children])

  function handlePosition(isRight = true) {
    const newIndex = isRight ? positionIndex + 1 : positionIndex - 1
    const newEl =
      scrollRef.current.children[newIndex] ??
      scrollRef.current.children[0].children[newIndex]

    const newElOffset = newEl.offsetLeft
    scrollRef.current.style.transform = `translate(-${newElOffset}px)`
    setShowRight(newElOffset < totalDistance.current)
    setPositionIndex(newIndex)
    setShowLeft(newElOffset > 0)
  }
  return (
    <ScrollWrapper>
      <div className="view">
        {showLeft && (
          <div className="arrow-left" onClick={() => handlePosition(false)}>
            <IconArrowLeft />
          </div>
        )}
        {showRight && (
          <div className="arrow-right" onClick={() => handlePosition()}>
            <IconArrowRight />
          </div>
        )}
        <div className="box">
          <div className="children" ref={scrollRef}>
            {props.children}
          </div>
        </div>
      </div>
    </ScrollWrapper>
  )
})

export default ScrollView
