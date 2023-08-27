import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'
import IconWorld from '@/assets/svg/icon_world'
import IconList from '@/assets/svg/icon_list'
import IconProfile from '@/assets/svg/icon_profile'

const HeaderRight = memo(() => {
  const [ShowPanel, setShowPannel] = useState(false)

  useEffect(() => {
    function handleClick() {
      setShowPannel(false)
    }

    window.addEventListener('click', handleClick, true)
    return () => {
      window.removeEventListener('click', handleClick, true)
    }
  }, [])

  function profileHandleClick() {
    setShowPannel(true)
  }

  return (
    <RightWrapper>
      <div className="login-wrapper">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconWorld />
        </span>
      </div>
      <div className="profile" onClick={() => profileHandleClick()}>
        <div className="list">
          <IconList />
        </div>
        <div className="c-profile">
          <span className="news"></span>
          <IconProfile />
        </div>
        {ShowPanel && (
          <div className="panel">
            <div className="top">
              <span className="register item">注册</span>
              <span className="item">登录</span>
            </div>
            <div className="bottom">
              <span className="item">出租房源</span>
              <span className="item">开展体验</span>
              <span className="item">帮助</span>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  )
})

export default HeaderRight
