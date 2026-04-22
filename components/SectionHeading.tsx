interface SectionHeadingProps {
  eyebrow: string
  title: string
  highlight?: string
  description: string
  align?: 'left' | 'center'
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = 'center',
}: SectionHeadingProps) {
  const centered = align === 'center'

  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} max-w-3xl`}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-blue-700">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
        {title}
        {highlight ? <span className="text-blue-700"> {highlight}</span> : null}
      </h2>
      <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">{description}</p>
    </div>
  )
}
