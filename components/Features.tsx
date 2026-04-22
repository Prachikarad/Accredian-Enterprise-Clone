import { Award, BarChart3, BookOpen, Puzzle, Users, Zap } from 'lucide-react'
import SectionHeading from './SectionHeading'

const features = [
  {
    icon: BookOpen,
    title: 'Institution-led curriculum design',
    description:
      'Programs are positioned around role readiness, with curriculum tracks informed by leading institutions and real workplace application.',
    color: 'from-blue-500 to-blue-700',
    bg: 'bg-blue-50',
  },
  {
    icon: BarChart3,
    title: 'Outcome-focused reporting',
    description:
      'Track adoption, attendance, assessments, and manager visibility in one place so L&D teams can tie learning activity to business priorities.',
    color: 'from-violet-500 to-violet-700',
    bg: 'bg-violet-50',
  },
  {
    icon: Users,
    title: 'Mentor and faculty support',
    description:
      'Blended delivery combines workshops, office hours, and mentor feedback to keep learners accountable beyond recorded content.',
    color: 'from-amber-500 to-orange-600',
    bg: 'bg-amber-50',
  },
  {
    icon: Puzzle,
    title: 'Custom rollout design',
    description:
      "Programs can be tailored to your organization's role mix, business context, and level bands instead of forcing a one-size-fits-all catalog.",
    color: 'from-emerald-500 to-teal-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: Award,
    title: 'Cohort-led engagement',
    description:
      'Structured cohorts bring peer accountability, scheduled touchpoints, and stronger completion momentum for working professionals.',
    color: 'from-pink-500 to-rose-600',
    bg: 'bg-pink-50',
  },
  {
    icon: Zap,
    title: 'Fast enterprise deployment',
    description:
      'The experience supports launches for focused leadership cohorts or multi-location enterprise rollouts without redesigning the stack.',
    color: 'from-sky-500 to-blue-600',
    bg: 'bg-sky-50',
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-white py-20 md:py-28">
      <div className="container-wide">
        <div className="reveal mb-16">
          <SectionHeading
            eyebrow="Platform capabilities"
            title="Everything needed to launch"
            highlight="a modern learning stack"
            description="The landing page is split into reusable sections that mirror an enterprise buyer journey: value proposition, proof, operating model, credentials, and conversion."
          />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <div
                key={feature.title}
                className={`reveal reveal-delay-${(index % 4) + 1} card-hover cursor-default rounded-[1.75rem] border border-slate-200 bg-white p-7`}
              >
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${feature.bg}`}
                >
                  <div
                    className={`flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br ${feature.color}`}
                  >
                    <Icon className="h-3.5 w-3.5 text-white" />
                  </div>
                </div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900 transition-colors hover:text-blue-700">
                  {feature.title}
                </h3>
                <p className="text-sm leading-7 text-slate-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
