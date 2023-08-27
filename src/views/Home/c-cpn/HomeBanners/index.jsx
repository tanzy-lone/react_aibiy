import React, { memo } from 'react'
import { BannersWrapper } from './style'

const index = memo(() => {
  return (
    <BannersWrapper>
      <div className="banners"></div>
    </BannersWrapper>
  )
})

export default index
