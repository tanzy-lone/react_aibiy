export function isEmpty(obj) {
  if (typeof obj !== 'object' || typeof obj === null) return
  return !!Object.keys(obj).length
}
