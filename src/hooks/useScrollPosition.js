import { useState, useEffect } from 'react'
import { throttle } from 'underscore'

export default function useScrollPosition() {
  const [scrollX, setScrollX] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScrollEvent = throttle(() => {
      setScrollX(window.scrollX)
      setScrollY(window.scrollY)
    }, 200)

    window.addEventListener('scroll', handleScrollEvent)

    return () => {
      window.removeEventListener('scroll', handleScrollEvent)
    }
  }, [])
  return { scrollX, scrollY }
}
