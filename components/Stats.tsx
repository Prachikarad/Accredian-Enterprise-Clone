'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 500, suffix: '+', label: 'Enterprise Clients', description: 'Across India and APAC' },
  { value: 94, suffix: '%', label: 'Completion Rate', description: 'Far above typical online learning benchmarks' },
  { value: 10000, suffix: '+', label: 'Learners Trained', description: 'Across leadership, product, AI, and analytics programs' },
  { value: 40, suffix: '%', label: 'Productivity Gain', description: 'Illustrative outcome framing for assignment demo' },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0

          const timer = setInterval(() => {
            current += increment

            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 md:py-20">
      <div className="absolute inset-0 opacity-5">
        <div
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            width: '100%',
            height: '100%',
          }}
        />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="reveal text-center">
              <div className="mb-2 text-4xl font-semibold text-blue-300 md:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mb-1 text-base font-semibold text-white">{stat.label}</div>
              <div className="text-xs text-white/50">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
