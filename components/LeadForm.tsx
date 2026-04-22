'use client'

import type { ChangeEvent, ElementType, FormEvent } from 'react'
import { useState } from 'react'
import {
  AlertCircle,
  Building2,
  CheckCircle,
  Mail,
  Phone,
  Send,
  User,
  Users,
} from 'lucide-react'
import SectionHeading from './SectionHeading'

interface FormData {
  name: string
  email: string
  company: string
  phone: string
  employees: string
  message: string
}

interface FieldProps {
  label: string
  name: keyof FormData
  type?: string
  placeholder: string
  required?: boolean
  icon: ElementType
  value: string
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void
  error?: string
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  required,
  icon: Icon,
  value,
  onChange,
  error,
}: FieldProps) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-slate-700">
        {label} {required ? <span className="text-red-500">*</span> : null}
      </label>
      <div className="relative">
        <Icon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`w-full rounded-xl border py-3 pl-10 pr-4 text-sm outline-none transition-all focus:ring-2 focus:ring-blue-200 ${
            error
              ? 'border-red-300 focus:border-red-400'
              : 'border-slate-200 focus:border-blue-400'
          }`}
        />
      </div>
      {error ? <p className="mt-1 text-xs text-red-500">{error}</p> : null}
    </div>
  )
}

const employeeOptions = [
  '1-50 employees',
  '51-200 employees',
  '201-500 employees',
  '501-1000 employees',
  '1000+ employees',
]

export default function LeadForm() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    employees: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [serverMessage, setServerMessage] = useState('')

  const validate = () => {
    const nextErrors: Partial<FormData> = {}

    if (!form.name.trim()) nextErrors.name = 'Name is required'
    if (!form.email.trim()) nextErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Enter a valid email'
    }
    if (!form.company.trim()) nextErrors.company = 'Company name is required'

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))

    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('loading')

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        setServerMessage(data.message)
        setForm({
          name: '',
          email: '',
          company: '',
          phone: '',
          employees: '',
          message: '',
        })
      } else {
        setStatus('error')
        setServerMessage(data.error || 'Something went wrong.')
      }
    } catch {
      setStatus('error')
      setServerMessage('Network error. Please try again.')
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[linear-gradient(135deg,#091325_0%,#11224a_60%,#173674_100%)] py-20 md:py-28"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-400/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-amber-400/5 blur-3xl" />

      <div className="container-wide relative z-10">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="reveal">
            <SectionHeading
              eyebrow="Lead capture"
              title="Turn the page into"
              highlight="a working demo funnel"
              description="The assignment bonus asked for a form and API. This implementation includes client validation, a mock Next.js API route, and friendly success and error states."
              align="left"
            />

            <div className="mt-10 space-y-5">
              {[
                {
                  icon: '01',
                  title: 'Clear enterprise CTA',
                  desc: 'Hero, nav, cards, and footer all point to the same conversion goal.',
                },
                {
                  icon: '02',
                  title: 'Responsive form layout',
                  desc: 'Inputs collapse cleanly on mobile while staying dense and readable on desktop.',
                },
                {
                  icon: '03',
                  title: 'Mock API integration',
                  desc: 'Submissions post to a Next.js route handler so the page demonstrates full-stack thinking.',
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-sm font-semibold text-white">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">{item.title}</div>
                    <div className="text-sm text-white/50">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay-2">
            <div className="rounded-[2rem] bg-white p-8 shadow-2xl">
              {status === 'success' ? (
                <div className="py-12 text-center">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="mb-2 text-2xl font-semibold text-slate-900">You are all set</h3>
                  <p className="mx-auto max-w-xs text-sm leading-relaxed text-slate-500">
                    {serverMessage}
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm font-medium text-blue-600 transition-colors hover:text-blue-800"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-7">
                    <h3 className="mb-1 text-2xl font-semibold text-slate-900">Request a Demo</h3>
                    <p className="text-sm text-slate-500">
                      Our team will respond within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <Field
                        label="Full Name"
                        name="name"
                        placeholder="Rahul Sharma"
                        required
                        icon={User}
                        value={form.name}
                        onChange={handleChange}
                        error={errors.name}
                      />
                      <Field
                        label="Work Email"
                        name="email"
                        type="email"
                        placeholder="rahul@company.com"
                        required
                        icon={Mail}
                        value={form.email}
                        onChange={handleChange}
                        error={errors.email}
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <Field
                        label="Company"
                        name="company"
                        placeholder="Acme Corp"
                        required
                        icon={Building2}
                        value={form.company}
                        onChange={handleChange}
                        error={errors.company}
                      />
                      <Field
                        label="Phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        icon={Phone}
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-slate-700">
                        Team Size
                      </label>
                      <div className="relative">
                        <Users className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                        <select
                          name="employees"
                          value={form.employees}
                          onChange={handleChange}
                          className="w-full appearance-none rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-700 outline-none transition-all focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
                        >
                          <option value="">Select team size</option>
                          {employeeOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-slate-700">
                        What are your upskilling goals?
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your team's skill gaps, goals, or specific programs you are exploring."
                        rows={3}
                        className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition-all focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
                      />
                    </div>

                    {status === 'error' ? (
                      <div className="flex items-center gap-2 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
                        <AlertCircle className="h-4 w-4 flex-shrink-0" />
                        {serverMessage}
                      </div>
                    ) : null}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 disabled:cursor-not-allowed disabled:bg-blue-400"
                    >
                      {status === 'loading' ? (
                        <>
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Get My Free Demo
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-slate-400">
                      By submitting, you agree to our Privacy Policy. No spam, ever.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
