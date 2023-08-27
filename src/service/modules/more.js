import YLRequest from '..'

export const fetchMoreData = (offset = 0, size = 20) => {
  return YLRequest.get({
    url: 'entire/list',
    params: {
      offset,
      size
    }
  })
}
