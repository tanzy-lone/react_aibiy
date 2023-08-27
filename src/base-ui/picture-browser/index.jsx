import React, { memo, useEffect, useState } from 'react'
import { PictureBrowserWrapper } from './style'
import PropTypes from 'prop-types'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import Indicator from '../indicator'

const PictureBrowser = memo((props) => {
  const { pictureData, handleCloseBrowser } = props
  const [currIndex, setCurrIndex] = useState(0)
  const [isNext, setIsNext] = useState(false)
  const [isShowList, setIsShowList] = useState(true)
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  const closeBrowser = () => {
    handleCloseBrowser && handleCloseBrowser()
  }

  const handleClick = (isRight = true) => {
    let newIndex = isRight ? currIndex + 1 : currIndex - 1
    if (newIndex < 0) newIndex = pictureData.length - 1
    if (newIndex > pictureData.length - 1) newIndex = 0
    setCurrIndex(newIndex)
    setIsNext(isRight)
  }

  const handleClickImageItem = (index) => {
    setCurrIndex(index)
    setIsNext(index > currIndex)
  }

  const ShowCpn = () => {
    return (
      <>
        隐藏图片列表
        <i className="iconfont icon-arrow-bottom"></i>
      </>
    )
  }

  const HiddenCpn = () => {
    return (
      <>
        显示图片列表<i className="iconfont icon-arrow-top"></i>
      </>
    )
  }

  return (
    <PictureBrowserWrapper isNext={isNext} isShowList={isShowList}>
      <div className="top" onClick={closeBrowser}>
        <i className="iconfont icon-close"></i>
      </div>
      <div className="main">
        <div className="control">
          <div className="btn left" onClick={(e) => handleClick(false)}>
            <IconArrowLeft width={77} height={77} />
          </div>
          <div className="btn right" onClick={(e) => handleClick()}>
            <IconArrowRight width={77} height={77} />
          </div>
        </div>
        <div className="picture">
          <SwitchTransition mode="in-out">
            <CSSTransition
              key={pictureData[currIndex]}
              timeout={200}
              classNames="slide"
            >
              <img src={pictureData?.[currIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>

      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="num">
              {currIndex + 1}/{pictureData.length}
            </div>
            <div className="apart">room apartment图片15</div>
          </div>
          <div className="show-list" onClick={() => setIsShowList(!isShowList)}>
            {isShowList ? <ShowCpn /> : <HiddenCpn />}
          </div>
        </div>
        <div className="list">
          <Indicator currIndex={currIndex}>
            {pictureData?.map((item, index) => {
              return (
                <div
                  onClick={() => handleClickImageItem(index)}
                  key={index}
                  className={`item-list ${index === currIndex ? 'active' : ''}`}
                >
                  <img src={item} alt="" />
                </div>
              )
            })}
          </Indicator>
        </div>
      </div>
    </PictureBrowserWrapper>
  )
})

PictureBrowser.propTypes = {
  pictureData: PropTypes.array
}

export default PictureBrowser
