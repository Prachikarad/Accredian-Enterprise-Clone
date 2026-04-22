'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Platform', href: '#features' },
  { label: 'Workflow', href: '#how-it-works' },
  { label: 'Programs', href: '#programs' },
  { label: 'Proof', href: '#testimonials' },
  { label: 'Partners', href: '#partners' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container-wide">
        <div className="flex h-16 items-center justify-between md:h-20">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white shadow-lg shadow-blue-950/20">
              AE
            </div>
            <span
              className={`text-xl font-semibold transition-colors ${
                scrolled ? 'text-slate-950' : 'text-white'
              }`}
            >
              Accredian <span className="text-blue-400">Enterprise</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 rounded-full border border-white/10 px-2 py-2 backdrop-blur-md md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  scrolled
                    ? 'text-slate-700 hover:bg-slate-100 hover:text-blue-700'
                    : 'text-white/85 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#partners"
              className={`text-sm font-medium transition-colors ${
                scrolled ? 'text-slate-700 hover:text-blue-700' : 'text-white/80 hover:text-white'
              }`}
            >
              Explore credentials
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200"
            >
              Get a Demo
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <button
            className={`rounded-md p-2 md:hidden ${scrolled ? 'text-slate-700' : 'text-white'}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 md:hidden ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-wide space-y-1 py-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 border-t border-slate-100 pt-3">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block w-full rounded-2xl bg-blue-600 px-5 py-3 text-center font-medium text-white transition-colors hover:bg-blue-700"
            >
              Get a Demo
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
