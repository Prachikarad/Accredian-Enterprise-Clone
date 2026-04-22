import { Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react'

const footerLinks = {
  Solutions: [
    { label: 'Learning Programs', href: '#programs' },
    { label: 'Analytics Dashboard', href: '#features' },
    { label: 'Live Mentorship', href: '#features' },
    { label: 'Custom Curriculum', href: '#features' },
  ],
  Programs: [
    { label: 'Data Science & AI', href: '#programs' },
    { label: 'Product Management', href: '#programs' },
    { label: 'Leadership', href: '#programs' },
    { label: 'Business Analytics', href: '#programs' },
  ],
  Company: [
    { label: 'About Accredian', href: '#top' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Press', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white">
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <div className="mb-5 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-sm font-bold text-slate-950">
                AE
              </div>
              <span className="text-xl font-semibold">
                Accredian <span className="text-blue-400">Enterprise</span>
              </span>
            </div>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-slate-400">
              Next.js internship assignment build inspired by the Accredian Enterprise experience,
              focused on structure, responsiveness, and reusable UI sections.
            </p>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5 text-sm text-slate-400">
                <Mail className="h-4 w-4 flex-shrink-0 text-blue-400" />
                enterprise@accredian.com
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-400">
                <Phone className="h-4 w-4 flex-shrink-0 text-blue-400" />
                +91 99535 94646
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-400">
                <MapPin className="h-4 w-4 flex-shrink-0 text-blue-400" />
                82A Udyog Vihar Phase IV, Gurugram
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-white">
                {section}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="animated-link text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-wide flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            Copyright {new Date().getFullYear()} Fullstack Education Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-white/10"
              aria-label="Twitter"
            >
              <Twitter className="h-3.5 w-3.5 text-slate-400" />
            </a>
            <a
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-white/10"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-3.5 w-3.5 text-slate-400" />
            </a>
            <a
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-white/10"
              aria-label="YouTube"
            >
              <Youtube className="h-3.5 w-3.5 text-slate-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
