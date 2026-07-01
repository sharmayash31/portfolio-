import { useEffect, useRef } from 'react'

export default function CursorFX() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const progressRef = useRef(null)

  useEffect(() => {
    const isFinePointer = window.matchMedia('(hover:hover) and (pointer:fine)').matches
    let raf
    let mx = 0, my = 0, rx = 0, ry = 0

    function onMove(e) {
      mx = e.clientX
      my = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = mx + 'px'
        dotRef.current.style.top = my + 'px'
      }
    }

    function loop() {
      rx += (mx - rx) * 0.18
      ry += (my - ry) * 0.18
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px'
        ringRef.current.style.top = ry + 'px'
      }
      raf = requestAnimationFrame(loop)
    }

    function onScroll() {
      const h = document.documentElement
      const pct = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100
      if (progressRef.current) progressRef.current.style.width = pct + '%'
    }

    if (isFinePointer) {
      window.addEventListener('mousemove', onMove)
      loop()
      const hoverables = document.querySelectorAll('a, .magnetic, button')
      const enter = () => ringRef.current?.classList.add('hover')
      const leave = () => ringRef.current?.classList.remove('hover')
      hoverables.forEach(el => {
        el.addEventListener('mouseenter', enter)
        el.addEventListener('mouseleave', leave)
      })
    }

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div className="progress" ref={progressRef} aria-hidden="true" />
      <div className="cursor-ring" ref={ringRef} aria-hidden="true" />
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
    </>
  )
}
