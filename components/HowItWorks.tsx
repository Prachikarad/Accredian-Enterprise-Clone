import { ClipboardList, Cpu, Rocket, TrendingUp } from 'lucide-react'
import SectionHeading from './SectionHeading'

const steps = [
  {
    icon: ClipboardList,
    title: 'Discovery and needs analysis',
    description:
      'The buyer journey begins with business goals, target roles, expected outcomes, and launch constraints for the organization.',
    tag: 'Week 1',
  },
  {
    icon: Cpu,
    title: 'Custom program design',
    description:
      'Learning architects map the right program mix, cadence, assessment flow, and stakeholder checkpoints for the rollout.',
    tag: 'Week 2-3',
  },
  {
    icon: Rocket,
    title: 'Launch and cohort formation',
    description:
      'Learners are grouped into cohorts with calendars, communication touchpoints, mentor interactions, and milestone-based tracking.',
    tag: 'Week 4',
  },
  {
    icon: TrendingUp,
    title: 'Measure and iterate',
    description:
      'Dashboards surface engagement and completion trends while feedback loops help refine the next wave of capability building.',
    tag: 'Ongoing',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-50 py-20 md:py-28">
      <div className="container-wide">
        <div className="reveal mb-16">
          <SectionHeading
            eyebrow="Workflow"
            title="A rollout model designed for"
            highlight="clarity and speed"
            description="This section breaks the implementation story into four steps so reviewers can quickly understand the operating model behind the UI."
          />
        </div>

        <div className="relative">
          <div className="absolute left-[calc(12.5%-1px)] right-[calc(12.5%-1px)] top-12 hidden h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 lg:block" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon

              return (
                <div
                  key={step.title}
                  className={`reveal reveal-delay-${index + 1} flex flex-col items-center text-center lg:items-start lg:text-left`}
                >
                  <div className="relative mb-6">
                    <div className="flex h-24 w-24 items-center justify-center rounded-[1.75rem] border border-slate-200 bg-white shadow-md">
                      <Icon className="h-10 w-10 text-blue-600" />
                    </div>
                    <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                      {index + 1}
                    </span>
                  </div>

                  <div className="mb-3 inline-block rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-600">
                    {step.tag}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">{step.title}</h3>
                  <p className="text-sm leading-7 text-slate-600">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
