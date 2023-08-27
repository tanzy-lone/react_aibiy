import React, { memo, useState } from 'react'
import { FilterWrapper } from './style'
import infoData from '@/assets/data/filter_data.json'

const Filter = memo(() => {
  const [activeNames, setActionNames] = useState([])
  function handleClick(item) {
    const newArr = [...activeNames]
    if (newArr.includes(item)) {
      // 移除
      const arrIndex = newArr.findIndex((filterItem) => filterItem === item)
      newArr.splice(arrIndex, 1)
    } else {
      // 添加
      newArr.push(item)
    }
    setActionNames(newArr)
  }
  return (
    <FilterWrapper>
      {infoData.map((item) => {
        return (
          <div
            className={`item ${activeNames.includes(item) ? 'active' : ''}`}
            key={item}
            onClick={() => handleClick(item)}
          >
            {item}
          </div>
        )
      })}
    </FilterWrapper>
  )
})

export default Filter
