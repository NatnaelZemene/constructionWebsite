import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui-kit/container'

const Facebook = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
const Instagram = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
const Telegram = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
const Linkedin = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
const Whatsapp = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
const Youtube = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>


export function SiteFooter() {
  return (
    <footer className="bg-[#0F172A] text-white">
      {/* ── Top CTA Section ── */}
      <div className="border-b border-white/10">
        <Container className="flex flex-col items-center justify-between gap-6 py-16 text-center md:flex-row md:text-left">
          <div className="max-w-xl">
            <h2 className="font-heading text-2xl font-extrabold uppercase tracking-tight text-white md:text-3xl">
              Ready to Start Your Construction Project?
            </h2>
            <p className="mt-3 leading-relaxed text-white/70">
              Whether you're planning a residential, commercial, or civil project, we're here to help bring your vision to life.
            </p>
          </div>
          <Link
            href="/#contact"
            className="shrink-0 rounded-full bg-[#1D4ED8] px-8 py-4 font-heading text-sm font-bold uppercase tracking-widest text-white shadow-lg shadow-[#1D4ED8]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#1E3A8A] hover:shadow-[#1D4ED8]/40"
          >
            Request a Free Quote
          </Link>
        </Container>
      </div>

      {/* ── Main Footer Links ── */}
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Column 1: Company Info */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-3" aria-label="Maereg Asnakew Deberu General Contractor home">
            <div className="relative size-12 shrink-0 overflow-hidden rounded-xl bg-white p-1 shadow-md">
              <Image
                src="/images/logo.png"
                alt="Maereg Asnakew Deberu General Contractor Logo"
                fill
                className="object-contain p-0.5"
              />
            </div>
            <span className="font-heading text-sm font-black uppercase leading-tight tracking-tight text-white">
              Maereg Asnakew Deberu <span className="block text-[#1D4ED8]">General Contractor</span>
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-white/70">
            Building Ethiopia's future through quality construction, integrity, and professional excellence.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col gap-5">
          <h3 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-[#1D4ED8]">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3">
            {[
              { label: 'Home', href: '/' },
              { label: 'About', href: '/#about' },
              { label: 'Services', href: '/#services' },
              { label: 'Projects', href: '/#projects' },
              { label: 'Contact', href: '/#contact' },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-[#1D4ED8]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Our Services */}
        <div className="flex flex-col gap-5">
          <h3 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-[#1D4ED8]">
            Our Services
          </h3>
          <ul className="flex flex-col gap-3">
            {[
              'General Contracting',
              'Residential Construction',
              'Commercial Construction',
              'Civil Works',
              'Renovation & Finishing',
            ].map((service) => (
              <li key={service} className="text-sm text-white/70 transition-colors hover:text-[#1D4ED8] cursor-default">
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Information */}
        <div className="flex flex-col gap-5">
          <h3 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-[#1D4ED8]">
            Contact Information
          </h3>
          <ul className="flex flex-col gap-4 text-sm text-white/70">
            <li>
              <strong className="block font-medium text-white">Phone:</strong>
              <a href="tel:+251936752367" className="transition-colors hover:text-[#1D4ED8]">+251 93 675 2367</a>
            </li>
            <li>
              <strong className="block font-medium text-white">Location:</strong>
              Gondar, Ethiopia
            </li>
            <li>
              <strong className="block font-medium text-white">Email:</strong>
              <a href="mailto:info@maereggc.com" className="transition-colors hover:text-[#1D4ED8]">info@maereggc.com</a>
            </li>
            <li>
              <strong className="block font-medium text-white">Working Hours:</strong>
              Monday – Saturday<br />
              8:00 AM – 6:00 PM
            </li>
          </ul>
        </div>
      </Container>

      {/* ── Social Media Row ── */}
      <Container className="pb-16 pt-4">
        <div className="flex justify-center gap-4 flex-wrap">
          {[
            { icon: Facebook, label: 'Facebook' },
            { icon: Instagram, label: 'Instagram' },
            { icon: Telegram, label: 'Telegram' },
            { icon: Linkedin, label: 'LinkedIn' },
            { icon: Whatsapp, label: 'WhatsApp' },
            { icon: Youtube, label: 'YouTube' },
          ].map(({ icon: Icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="group flex size-12 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:scale-110 hover:border-[#1D4ED8] hover:bg-[#1D4ED8] hover:shadow-lg hover:shadow-[#1D4ED8]/30"
            >
              <Icon className="size-5 transition-transform duration-300 group-hover:scale-110" />
            </a>
          ))}
        </div>
      </Container>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/10 bg-[#0A101C]">
        <Container className="flex flex-col items-center justify-between gap-4 py-8 text-center text-[13px] text-white/50 md:flex-row md:text-left">
          <p>
            &copy; 2026 Maereg Asnakew Deberu General Contractor.<br className="md:hidden" /> All Rights Reserved.
          </p>
          <p>
            Designed & Developed by <span className="font-semibold text-white/80">Nathy | Vibranium Dev</span>
          </p>
        </Container>
      </div>
    </footer>
  )
}
