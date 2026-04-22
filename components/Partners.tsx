import SectionHeading from './SectionHeading'

const partners = [
  { name: 'IIT Guwahati', short: 'IIT-G', desc: 'Technology and AI Programs', color: 'bg-blue-700' },
  { name: 'IIM Visakhapatnam', short: 'IIM-V', desc: 'Management and Product Programs', color: 'bg-red-700' },
  { name: 'IIM Lucknow', short: 'IIM-L', desc: 'Leadership and CXO Programs', color: 'bg-indigo-700' },
  { name: 'XLRI Jamshedpur', short: 'XLRI', desc: 'HR and General Management', color: 'bg-emerald-700' },
  { name: 'IIT Kanpur', short: 'IIT-K', desc: 'Data Science and Analytics', color: 'bg-orange-700' },
  { name: 'IIT Bombay', short: 'IIT-B', desc: 'Engineering and ML Programs', color: 'bg-violet-700' },
]

const certBodies = ['Google', 'Microsoft', 'AWS', 'Meta', 'IBM', 'Salesforce']

export default function Partners() {
  return (
    <section id="partners" className="bg-white py-20 md:py-28">
      <div className="container-wide">
        <div className="reveal mb-16">
          <SectionHeading
            eyebrow="Partners"
            title="Highlight credential value through"
            highlight="institutional associations"
            description="A clean grid helps the page echo the reference site's enterprise positioning without relying on copied assets or templates."
          />
        </div>

        <div className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className={`reveal reveal-delay-${(index % 4) + 1} card-hover group flex cursor-default flex-col items-center rounded-[1.75rem] border border-slate-200 bg-white p-5 text-center`}
            >
              <div
                className={`mb-3 flex h-14 w-14 items-center justify-center rounded-xl ${partner.color}`}
              >
                <span className="text-xs font-bold leading-tight text-white">{partner.short}</span>
              </div>
              <div className="mb-1 text-sm font-semibold leading-snug text-slate-800">
                {partner.name}
              </div>
              <div className="text-xs text-slate-400">{partner.desc}</div>
            </div>
          ))}
        </div>

        <div className="reveal rounded-3xl bg-slate-50 p-8 md:p-10">
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
            Also certified by global technology leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {certBodies.map((body) => (
              <div
                key={body}
                className="cursor-default text-xl font-semibold text-slate-400 transition-colors hover:text-slate-600"
              >
                {body}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
