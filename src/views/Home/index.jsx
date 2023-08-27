import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import HomeBaners from './c-cpn/HomeBanners'
import { HomeWrapper } from './style'
import { goodsPriceInfoAsync } from '@/store/modules/home'
import HomeSection from './c-cpn/HomeSection'
import HomeSectionV2 from './c-cpn/HomeSectionV2'
import { isEmpty } from '@/utils'
import HomeLongFor from './c-cpn/HomeLongFor'
import HomeSectionV3 from '@/views/Home/c-cpn/HomeSectionV3'
import { changeHeaderConfigAction } from '@/store/modules/main'

const index = memo(() => {
  // 从redux中获取数据
  const {
    goodsPriceInfo,
    hightScore,
    discount,
    recommendInfo,
    longfor,
    plusData
  } = useSelector(
    (state) => ({
      goodsPriceInfo: state.home.goodsPriceInfo,
      hightScore: state.home.hightScore,
      discount: state.home.discount,
      recommendInfo: state.home.recommendList,
      longfor: state.home.longfor,
      plusData: state.home.plusData
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(goodsPriceInfoAsync())
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: true }))
  }, [dispatch])
  return (
    <HomeWrapper>
      <HomeBaners />
      <div className="content">
        {isEmpty(discount) && <HomeSectionV2 infoData={discount} />}
        {isEmpty(recommendInfo) && <HomeSectionV2 infoData={recommendInfo} />}
        {isEmpty(longfor) && <HomeLongFor infoData={longfor} />}
        {/* <HomeSection infoList={goodsPriceInfo} /> */}
        {isEmpty(goodsPriceInfo) && <HomeSection infoList={goodsPriceInfo} />}
        {isEmpty(hightScore) && <HomeSection infoList={hightScore} />}
        {isEmpty(plusData) && (
          <HomeSectionV3 infoData={plusData}></HomeSectionV3>
        )}
      </div>
    </HomeWrapper>
  )
})

export default index
