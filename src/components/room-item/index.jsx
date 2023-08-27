import React, { memo } from 'react'
import { PropTypes } from 'prop-types'
import { RoomItemWrapper } from './style'
import Rating from '@mui/material/Rating'
import { Carousel } from 'antd'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import { useRef, useState } from 'react'
import Indicator from '@/base-ui/indicator'
import { useDispatch } from 'react-redux'
import { changeFavorList } from '@/store/modules/favor'

const Cpn = (props) => {
  const { itemData } = props
  return (
    <div className="inner-img">
      <img src={itemData.picture_url} alt="" />
    </div>
  )
}

const Cpn1 = (props) => {
  const sliderRef = useRef()
  const { itemData } = props
  const [currIndex, setCurrIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(null)
  const { itemClick } = props
  const dispatch = useDispatch()
  const handleControlClick = (e, isRight = true) => {
    e.stopPropagation()
    isRight ? sliderRef.current.next() : sliderRef.current.prev()
    setPrevIndex(currIndex)
    let newIndex = isRight ? currIndex + 1 : currIndex - 1
    if (newIndex > itemData.picture_urls.length - 1) newIndex = 0
    if (newIndex < 0) newIndex = itemData.picture_urls.length - 1
    setCurrIndex(newIndex)
  }

  const handleFavor = () => {
    dispatch(changeFavorList(itemData._id))
  }

  const handleItemClick = () => {
    console.log('handleClick')
    itemClick && itemClick(itemData)
  }

  return (
    <div className="slider">
      <div
        className="favor"
        onClick={() => {
          handleFavor()
        }}
      >
        <i className="iconfont icon-favorites"></i>
      </div>
      <div className="list">
        <Indicator currIndex={currIndex} prevIndex={prevIndex}>
          {itemData?.picture_urls?.map((item, index) => {
            return (
              <div className="indicator-list" key={item}>
                <span
                  className={`item ${index === currIndex ? 'active' : ''}`}
                ></span>
              </div>
            )
          })}
        </Indicator>
      </div>

      <div className="control">
        <div className="btn left" onClick={(e) => handleControlClick(e, false)}>
          <IconArrowLeft height={30} width={30} />
        </div>
        <div className="btn right" onClick={(e) => handleControlClick(e)}>
          <IconArrowRight height={30} width={30} />
        </div>
      </div>

      <div className="swiper" onClick={() => handleItemClick()}>
        <Carousel dots={false} ref={sliderRef}>
          {itemData?.picture_urls?.map((item) => {
            return (
              <div className="inner-img" key={item}>
                <img src={item} alt="" />
              </div>
            )
          })}
        </Carousel>
      </div>
    </div>
  )
}

const RoomItem = memo((props) => {
  const { itemData, width, itemClick } = props

  return (
    <RoomItemWrapper
      verifyColor={itemData?.verify_info?.text_color || '#39576a'}
      width={width}
    >
      <div className="inner">
        {itemData.picture_urls ? (
          <Cpn1 itemData={itemData} itemClick={itemClick} />
        ) : (
          <Cpn itemData={itemData} />
        )}

        <p className="desc">{itemData.verify_info.messages.join('·')}</p>
        <div className="name">{itemData.name}</div>
        <div className="price">￥{itemData.price}/晚</div>
        <div className="bottom">
          <Rating
            // 当star_rating为undefined或者是null执行后者
            value={itemData?.star_rating ?? 5}
            readOnly
            size="small"
            sx={{ fontSize: '.75rem', color: '#00848A' }}
          />
          <span className="count">{itemData?.reviews_count}</span>
          {/* <span className="extra">·{itemData?.bottom_info?.content}</span> */}
          {itemData?.bottom_info && (
            <span className="extra">·{itemData?.bottom_info?.content}</span>
          )}
        </div>
      </div>
    </RoomItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object,
  width: PropTypes.string
}
export default RoomItem
