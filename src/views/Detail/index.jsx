import React, { memo, useEffect } from 'react'
import { DetailWrapper } from './style'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import HousePicture from './c-cpn/HousePicture'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Detail = memo(() => {
  const { detailInfos } = useSelector(
    (state) => ({
      detailInfos: state.detail.detailInfos
    }),
    shallowEqual
  )

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false, topAlpha: false }))
  }, [dispatch])

  const { picture_urls } = detailInfos
  return (
    <DetailWrapper>
      <HousePicture pictureData={picture_urls} />
    </DetailWrapper>
  )
})

export default Detail
