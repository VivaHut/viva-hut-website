import { useEffect, useRef, useState } from 'react'

export default function useHeroScroll() {
  const [firing, setFiring] = useState(false)
  const locked = useRef(false)
  const touchStartY = useRef(null)

  useEffect(() => {
    function snap() {
      if (locked.current) return
      locked.current = true
      setFiring(true)
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
      setTimeout(() => {
        locked.current = false
        setFiring(false)
      }, 900)
    }

    function onWheel(e) {
      if (window.scrollY !== 0) return
      if (e.deltaY > 0) snap()
    }

    function onTouchStart(e) {
      touchStartY.current = e.touches[0].clientY
    }

    function onTouchEnd(e) {
      if (touchStartY.current === null) return
      const delta = touchStartY.current - e.changedTouches[0].clientY
      touchStartY.current = null
      if (window.scrollY !== 0) return
      if (delta > 30) snap()
    }

    window.addEventListener('wheel', onWheel, { passive: true })
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })

    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [])

  return { firing }
}
