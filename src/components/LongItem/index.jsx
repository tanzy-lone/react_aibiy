import React, { memo } from 'react'
import { LongItemWrapper } from './style'
import PropTypes from 'prop-types'

const LongItem = memo((props) => {
  const { itemData } = props
  return (
    <LongItemWrapper>
      <div className="item">
        <div className="wrap">
          <img src={itemData.picture_url} alt="" className="pic" />
          <div className="cover"></div>
          <div className="info">
            <div className="item-name">{itemData.city}</div>
            <div className="item-price">
              <span className="text">均价</span>
              <span className="price">{itemData.price}</span>
            </div>
          </div>
        </div>
      </div>
    </LongItemWrapper>
  )
})

LongItem.propTypes = {
  itemData: PropTypes.object
}

export default LongItem
