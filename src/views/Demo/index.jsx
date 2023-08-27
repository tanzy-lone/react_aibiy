import React, { memo, useState } from 'react'
import { DemoWrapper } from './style'
import Indicator from '@/base-ui/indicator'

const Demo = memo(() => {
  const [list, setList] = useState([
    'abc',
    'cba',
    'aaa',
    'ddd',
    'wqs',
    'wbc',
    'rss',
    'qsa'
  ])
  const [activeIndex, setActiveIndex] = useState(0)
  const handleClick = (isRight = true) => {
    let newIndex = isRight ? activeIndex + 1 : activeIndex - 1
    if (newIndex > list.length - 1) newIndex = 0
    if (newIndex < 0) newIndex = list.length - 1
    setActiveIndex(newIndex)
  }

  return (
    <DemoWrapper>
      <div className="control">
        <button onClick={() => handleClick(false)}>向左</button>
        <button onClick={() => handleClick()}>向右</button>
      </div>
      <div className="list">
        <Indicator currIndex={activeIndex}>
          {list.map((item) => {
            return <button key={item}>{item}</button>
          })}
        </Indicator>
      </div>
    </DemoWrapper>
  )
})

export default Demo
