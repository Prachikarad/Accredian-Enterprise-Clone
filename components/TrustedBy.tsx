const companies = [
  'Infosys',
  'Wipro',
  'TCS',
  'HCLTech',
  'Mahindra',
  'HDFC Bank',
  'Bajaj Finance',
  'Flipkart',
  'Swiggy',
  'Razorpay',
]

export default function TrustedBy() {
  return (
    <section className="border-b border-slate-200 bg-white/80 py-12 backdrop-blur-sm">
      <div className="container-wide">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-[0.3em] text-slate-400">
          Trusted by 500+ leading enterprises
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {companies.map((company) => (
            <div
              key={company}
              className="rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-500 transition-colors hover:border-blue-200 hover:text-blue-700"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
