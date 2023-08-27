import React, { memo } from 'react'
import { FooterWrapper } from './style'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const SectionFooter = memo((props) => {
  const { name } = props
  let content = ''

  content = name ? `查看更多${name}` : '显示全部'
  // if (name) {
  //   content = `查看更多${name}`
  // } else {
  //   content = '显示更多'
  // }
  const navigate = useNavigate()
  function handleTo() {
    navigate('/more')
  }

  return (
    <FooterWrapper color={name ? '#00848A' : '#000'}>
      <div className="more" onClick={handleTo}>
        <span className="text">{content}</span>
        <IconArrowRight classn="icon" />
      </div>
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string
}

export default SectionFooter
