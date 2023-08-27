import React, { memo, useCallback } from 'react'
import { HousePictureWrapper } from './style'
import PictureBrowser from '@/base-ui/picture-browser'
import { useState } from 'react'
import PropTypes from 'prop-types'

const HousePicture = memo((props) => {
  const { pictureData } = props
  const [isShowBrowser, setIsShowBrowser] = useState(false)

  const genRightPicItem = (item) => {
    return (
      <div className="item" key={item}>
        <div className="cover"></div>
        <img src={item} alt="" />
      </div>
    )
  }

  const handleCloseBrowser = useCallback(() => {
    setIsShowBrowser(false)
  }, [])

  return (
    <HousePictureWrapper>
      <div className="picture">
        <div className="left">
          <div className="item">
            <div className="cover"></div>
            <img src={pictureData?.[0]} alt="" />
          </div>
        </div>
        <div className="right">
          {pictureData?.slice(1, 5).map(genRightPicItem)}
        </div>
      </div>
      {isShowBrowser && (
        <PictureBrowser
          pictureData={pictureData}
          handleCloseBrowser={handleCloseBrowser}
        />
      )}
      <div className="show-btn" onClick={() => setIsShowBrowser(true)}>
        显示照片
      </div>
    </HousePictureWrapper>
  )
})

HousePicture.propTypes = {
  pictureData: PropTypes.array
}

export default HousePicture
