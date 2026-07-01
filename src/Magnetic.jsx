import { useRef } from 'react'

export default function Magnetic({ children, className = '', ...props }) {
  const ref = useRef(null)

  function onMove(e) {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = e.clientX - r.left - r.width / 2
    const y = e.clientY - r.top - r.height / 2
    el.style.transform = `translate(${x * 0.28}px, ${y * 0.28}px)`
  }
  function onLeave() {
    if (ref.current) ref.current.style.transform = 'translate(0,0)'
  }

  return (
    <a ref={ref} className={`magnetic ${className}`} onMouseMove={onMove} onMouseLeave={onLeave} {...props}>
      {children}
    </a>
  )
}
