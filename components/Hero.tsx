'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight, CheckCircle2, CirclePlay } from 'lucide-react'

const highlights = [
  'Cohort-based learning journeys',
  'Live faculty and mentor support',
  'Dashboards built for L&D teams',
]

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(20px)'
    requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    })
  }, [])

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.2),_transparent_25%),linear-gradient(135deg,#091325_0%,#0f1f43_60%,#193673_100%)]"
    >
      <div className="hero-grid absolute inset-0 opacity-40" />
      <div className="absolute left-[-120px] top-24 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
      <div className="absolute bottom-[-80px] right-[-40px] h-80 w-80 rounded-full bg-amber-300/10 blur-3xl" />

      <div className="container-wide relative z-10 pb-16 pt-24 md:pb-24 md:pt-32" ref={heroRef}>
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-3xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              Built for enterprise capability building
            </div>

            <h1 className="text-4xl font-semibold leading-[0.98] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Upskill teams with
              <span className="text-blue-300"> institution-led </span>
              programs and business-ready outcomes.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
              Recreated as a polished partial clone of the Accredian Enterprise homepage in
              Next.js. The experience highlights workforce programs, partner credentials,
              measurable learning outcomes, and a lead capture flow for demos.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-white/78">
                  <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-8 py-4 font-semibold text-white transition-all hover:bg-blue-400 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                Book enterprise demo
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-8 py-4 font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/15"
              >
                <CirclePlay className="h-5 w-5" />
                See how rollout works
              </a>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div className="glass-panel rounded-[2rem] border border-white/15 p-5 shadow-2xl shadow-slate-950/25">
              <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-blue-200/70">
                      Enterprise dashboard
                    </p>
                    <h3 className="mt-2 text-3xl font-semibold">Capability Pulse</h3>
                  </div>
                  <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                    Live cohort view
                  </div>
                </div>

                <div className="grid gap-4 py-6 sm:grid-cols-3">
                  {[
                    { value: '94%', label: 'Completion' },
                    { value: '4.8/5', label: 'Learner score' },
                    { value: '12 wks', label: 'Avg. launch time' },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-2xl bg-white/5 p-4">
                      <p className="text-2xl font-semibold text-white">{stat.value}</p>
                      <p className="mt-1 text-sm text-white/60">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  {[
                    ['Program adoption', '86%'],
                    ['Mentor session attendance', '78%'],
                    ['Manager satisfaction', '91%'],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <div className="mb-2 flex items-center justify-between text-sm text-white/72">
                        <span>{label}</span>
                        <span>{value}</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/10">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300"
                          style={{ width: value }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-white/70">
                    Recommended next cohort:{' '}
                    <span className="font-semibold text-white">
                      Product leadership for mid-level managers
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
