'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, MapPin, Clock } from 'lucide-react'
import { Container } from '@/components/ui-kit/container'
import { ContactForm } from '@/components/contact-form'

const contactCards = [
  { icon: Phone, title: 'Phone', lines: ['+251 93 675 2367'], href: 'tel:+251936752367', linkLabel: 'Call us now' },
  { icon: MapPin, title: 'Location', lines: ['Gondar, Ethiopia'], href: 'https://maps.google.com/?q=Gondar,Ethiopia', linkLabel: 'View on map' },
  { icon: Clock, title: 'Working Hours', lines: ['Monday – Saturday', '8:00 AM – 6:00 PM'], href: null, linkLabel: null },
]

export function ContactSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="scroll-mt-24 bg-[#F8FAFC] py-24 md:py-32" aria-labelledby="contact-heading">
      <Container ref={ref}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-16 flex max-w-2xl flex-col items-center gap-4 text-center"
        >
          <p className="font-heading text-xs font-extrabold uppercase tracking-[0.3em] text-[#1D4ED8]">Contact Us</p>
          <h2 id="contact-heading" className="text-balance font-heading text-4xl font-black leading-tight tracking-tight text-[#0F172A] md:text-5xl">
            Let's Build Your Next Project Together
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-[#334155]/80">
            Whether you're planning a residential home, commercial building, or civil works project, our team is ready to help. Contact Maereg Asnakew Deberu General Contractor today.
          </p>
        </motion.div>

        {/* Two-column grid */}
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_400px]">

          {/* LEFT: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg md:p-10"
          >
            <h3 className="mb-8 font-heading text-2xl font-black text-[#0F172A]">Send Us a Message</h3>
            <ContactForm />
          </motion.div>

          {/* RIGHT: Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-5"
          >
            {contactCards.map(({ icon: Icon, title, lines, href, linkLabel }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-start gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#1D4ED8]/30 hover:shadow-xl hover:shadow-[#1D4ED8]/10"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#1D4ED8]/10 text-[#1D4ED8] transition-colors duration-300 group-hover:bg-[#1D4ED8] group-hover:text-white">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-1">
                  <p className="font-heading text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#1D4ED8]">{title}</p>
                  {lines.map((line) => (
                    <p key={line} className="text-sm font-semibold text-[#0F172A]">{line}</p>
                  ))}
                  {href && linkLabel && (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="mt-1 font-heading text-xs font-bold uppercase tracking-widest text-[#1D4ED8] underline-offset-4 hover:underline">
                      {linkLabel} →
                    </a>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Dark navy CTA card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl bg-[#0F172A] p-7 shadow-xl shadow-[#0F172A]/20"
            >
              <p className="font-heading text-xs font-extrabold uppercase tracking-[0.2em] text-[#1D4ED8]">Quick Response</p>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                We typically respond to all inquiries within one business day. For urgent projects, call us directly for an immediate response.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </Container>
    </section>
  )
}
