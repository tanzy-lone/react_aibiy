import ylRequest from '../request'

const fetchGoodsList = () => {
  return ylRequest.get({
    url: '/home/goodprice'
  })
}
const fetchHightScore = () => {
  return ylRequest.get({
    url: '/home/highscore'
  })
}

const fetchDiscount = () => {
  return ylRequest.get({
    url: '/home/discount'
  })
}

const fetchHomeRecommend = () => {
  return ylRequest.get({
    url: '/home/hotrecommenddest'
  })
}

const fetchHomeLongFor = () => {
  return ylRequest.get({
    url: '/home/longfor'
  })
}

const fetchHomePlusData = () => {
  return ylRequest.get({
    url: '/home/plus'
  })
}
export {
  fetchGoodsList,
  fetchHightScore,
  fetchDiscount,
  fetchHomeRecommend,
  fetchHomeLongFor,
  fetchHomePlusData
}
