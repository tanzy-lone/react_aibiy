export function isEmpty(obj) {
  // eslint-disable-next-line
  if (typeof obj !== 'object' || typeof obj === null) return
  return !!Object.keys(obj).length
}
