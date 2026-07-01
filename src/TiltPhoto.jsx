import { useRef } from 'react'

export default function TiltPhoto({ children }) {
  const wrapRef = useRef(null)
  const frameRef = useRef(null)

  function onMove(e) {
    const el = wrapRef.current
    const frame = frameRef.current
    if (!el || !frame) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width   // 0 -> 1
    const py = (e.clientY - r.top) / r.height   // 0 -> 1
    const rotateY = (px - 0.5) * 50   // left/right tilt
    const rotateX = (py - 0.5) * -50  // up/down tilt
    frame.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`
  }

  function onLeave() {
    const frame = frameRef.current
    if (frame) frame.style.transform = `rotateX(0deg) rotateY(0deg) rotate(-2deg) scale(1)`
  }

  function onEnter() {
    const frame = frameRef.current
    if (frame) frame.style.transition = 'transform .15s ease-out'
  }

  return (
    <div
      ref={wrapRef}
      className="tilt-wrap"
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div ref={frameRef} className="tilt-frame">
        {children}
      </div>
    </div>
  )
}
