'use client'

import { useState } from 'react'
import { Clock, Star, Users } from 'lucide-react'
import SectionHeading from './SectionHeading'

const categories = [
  'All Programs',
  'Data Science & AI',
  'Product Management',
  'Leadership',
  'Business Analytics',
]

const programs = [
  {
    category: 'Data Science & AI',
    title: 'Executive Program in Data Science and AI',
    institute: 'IIT Guwahati',
    duration: '6 months',
    learners: '2,400+',
    rating: 4.8,
    level: 'Advanced',
    tag: 'Most Popular',
    color: 'from-blue-500 to-blue-700',
  },
  {
    category: 'Product Management',
    title: 'PG Certificate in Product Management',
    institute: 'IIM Visakhapatnam',
    duration: '8 months',
    learners: '1,800+',
    rating: 4.9,
    level: 'Intermediate',
    tag: 'Bestseller',
    color: 'from-violet-500 to-purple-700',
  },
  {
    category: 'Leadership',
    title: 'CXO Leadership Program',
    institute: 'IIM Lucknow',
    duration: '12 months',
    learners: '900+',
    rating: 4.7,
    level: 'Executive',
    tag: 'C-Suite',
    color: 'from-amber-500 to-orange-600',
  },
  {
    category: 'Business Analytics',
    title: 'Business Analytics and Intelligence',
    institute: 'IIT Kanpur',
    duration: '6 months',
    learners: '3,100+',
    rating: 4.8,
    level: 'Intermediate',
    tag: 'High Demand',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    category: 'Data Science & AI',
    title: 'Machine Learning Engineering',
    institute: 'IIT Bombay',
    duration: '9 months',
    learners: '1,200+',
    rating: 4.9,
    level: 'Advanced',
    tag: 'New',
    color: 'from-sky-500 to-blue-600',
  },
  {
    category: 'Leadership',
    title: 'Senior Management Program',
    institute: 'XLRI Jamshedpur',
    duration: '10 months',
    learners: '700+',
    rating: 4.8,
    level: 'Executive',
    tag: 'Premium',
    color: 'from-pink-500 to-rose-600',
  },
]

export default function Programs() {
  const [active, setActive] = useState('All Programs')

  const filtered =
    active === 'All Programs'
      ? programs
      : programs.filter((program) => program.category === active)

  return (
    <section id="programs" className="bg-white py-20 md:py-28">
      <div className="container-wide">
        <div className="reveal mb-12">
          <SectionHeading
            eyebrow="Programs"
            title="Showcase role-based credentials with"
            highlight="reusable program cards"
            description="The cards are intentionally data-driven so more categories or programs can be added without changing the visual structure."
          />
        </div>

        <div className="reveal mb-12 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                active === category
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((program) => (
            <div
              key={program.title}
              className="card-hover group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white"
            >
              <div className={`h-2 bg-gradient-to-r ${program.color}`} />
              <div className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-600">
                    {program.tag}
                  </span>
                  <span className="text-xs font-medium text-slate-400">{program.level}</span>
                </div>

                <h3 className="mb-1 text-lg font-semibold leading-snug text-slate-900 transition-colors group-hover:text-blue-700">
                  {program.title}
                </h3>
                <p className="mb-5 text-sm font-medium text-blue-600">{program.institute}</p>

                <div className="mb-5 flex items-center gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {program.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5" />
                    {program.learners} trained
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    {program.rating}
                  </span>
                </div>

                <a
                  href="#contact"
                  className="block w-full rounded-xl border border-blue-200 py-2.5 text-center text-sm font-semibold text-blue-600 transition-all hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  Request Brochure
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-10 text-center">
          <a
            href="#contact"
            className="animated-link inline-flex items-center gap-2 font-medium text-blue-600 transition-colors hover:text-blue-800"
          >
            View all 40+ programs
          </a>
        </div>
      </div>
    </section>
  )
}
