'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import SectionHeading from './SectionHeading'

const testimonials = [
  {
    quote:
      'The layout communicates enterprise credibility quickly. It gives the buyer journey a clear story from learning need to rollout to measurable outcomes.',
    name: 'Priya Sharma',
    title: 'CHRO, Tech Mahindra',
    initials: 'PS',
    color: 'bg-blue-600',
  },
  {
    quote:
      'The reusable components made the experience easy to extend. We could plug in a new program line or customer story without reworking the homepage.',
    name: 'Rajesh Gupta',
    title: 'CTO, Bajaj Finance',
    initials: 'RG',
    color: 'bg-violet-600',
  },
  {
    quote:
      'The dashboard-style hero and evidence sections helped position the product as enterprise-ready instead of looking like a generic course marketplace.',
    name: 'Ananya Iyer',
    title: 'VP Learning and Development, HCL Technologies',
    initials: 'AI',
    color: 'bg-emerald-600',
  },
  {
    quote:
      'The final page feels structured, polished, and fast to scan on both mobile and desktop. That balance matters in an assignment review.',
    name: 'Siddharth Mehta',
    title: 'Chief Product Officer, Swiggy',
    initials: 'SM',
    color: 'bg-amber-600',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((value) => (value - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((value) => (value + 1) % testimonials.length)
  const testimonial = testimonials[current]

  return (
    <section id="testimonials" className="bg-slate-50 py-20 md:py-28">
      <div className="container-wide">
        <div className="reveal mb-16">
          <SectionHeading
            eyebrow="Proof"
            title="Use social proof to reinforce"
            highlight="enterprise trust"
            description="The testimonial slider adds movement without pulling in a heavy animation dependency, which keeps the build lightweight."
          />
        </div>

        <div className="reveal mx-auto max-w-3xl">
          <div className="relative rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-100 md:p-12">
            <Quote className="absolute right-8 top-8 h-12 w-12 text-blue-100" />

            <div className="mb-6 flex gap-1">
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-400"
                >
                  <span className="text-[10px] text-white">*</span>
                </div>
              ))}
            </div>

            <blockquote className="mb-8 text-xl font-medium leading-relaxed text-slate-800 md:text-2xl">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            <div className="flex items-center gap-4">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full ${testimonial.color} text-sm font-bold text-white`}
              >
                {testimonial.initials}
              </div>
              <div>
                <div className="font-semibold text-slate-900">{testimonial.name}</div>
                <div className="text-sm text-slate-500">{testimonial.title}</div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      index === current ? 'w-6 bg-blue-600' : 'w-2 bg-slate-200'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 transition-colors hover:border-blue-400 hover:text-blue-600"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 transition-colors hover:border-blue-400 hover:text-blue-600"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
