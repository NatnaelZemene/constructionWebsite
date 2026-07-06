'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { Users, HardHat, ShieldCheck, Clock, MessageSquare, ThumbsUp } from 'lucide-react'
import { Container } from '@/components/ui-kit/container'

const features = [
  { icon: Users, title: 'Experienced Professionals', description: 'A skilled team of engineers, supervisors, and tradespeople with years of field experience.' },
  { icon: HardHat, title: 'Quality Construction', description: 'We use proven materials and methods to ensure durable, high-standard results on every build.' },
  { icon: ShieldCheck, title: 'Safety Standards', description: 'Strict safety protocols are enforced at every stage to protect workers and clients alike.' },
  { icon: Clock, title: 'Timely Delivery', description: 'We plan and execute projects efficiently to meet agreed deadlines without compromising quality.' },
  { icon: MessageSquare, title: 'Client Communication', description: 'Regular updates and open communication keep clients informed throughout the project lifecycle.' },
  { icon: ThumbsUp, title: 'Trusted Service', description: 'Our track record of satisfied clients across Ethiopia speaks to our reliability and integrity.' },
]

export function WhyChooseUsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const imageRef = useRef(null)
  const imageInView = useInView(imageRef, { once: true, margin: '-80px' })

  return (
    <section id="why-choose-us" className="scroll-mt-24 bg-[#F8FAFC] py-24 md:py-32" aria-labelledby="why-heading">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* ── LEFT COLUMN ── */}
          <div ref={ref} className="flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-5"
            >
              <p className="font-heading text-xs font-extrabold uppercase tracking-[0.3em] text-[#1D4ED8]">Why Choose Us</p>
              <h2 id="why-heading" className="text-balance font-heading text-4xl font-black leading-tight tracking-tight text-[#0F172A] md:text-5xl">
                Why Clients Trust{' '}
                <span className="text-[#1D4ED8]">Maereg Asnakew Deberu</span>{' '}
                General Contractor
              </h2>
              <p className="max-w-lg text-base leading-relaxed text-[#334155]/80">
                Every project is built with a commitment to quality, safety, and professionalism. From planning to final delivery, we focus on providing dependable construction services that exceed client expectations.
              </p>
            </motion.div>

            {/* Feature cards — 2-col grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map(({ icon: Icon, title, description }, i) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex flex-col gap-3 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#1D4ED8]/30 hover:shadow-lg hover:shadow-[#1D4ED8]/10"
                >
                  <span className="flex size-10 items-center justify-center rounded-xl bg-[#0F172A]/5 text-[#0F172A] transition-colors duration-300 group-hover:bg-[#1D4ED8] group-hover:text-white">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-heading text-sm font-bold text-[#0F172A]">{title}</h3>
                  <p className="text-xs leading-relaxed text-[#334155]/70">{description}</p>
                </motion.article>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN — Floating Image ── */}
          <div ref={imageRef} className="relative flex justify-center">
            {/* Gold accent border behind image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={imageInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-6 -right-6 h-full w-full rounded-[28px] border-2 border-[#1D4ED8]/40"
              aria-hidden="true"
            />

            {/* Floating image wrapper */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={imageInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-lg overflow-hidden rounded-[24px] shadow-2xl shadow-[#0F172A]/20"
            >
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                className="relative aspect-[4/5] overflow-hidden rounded-[24px]"
              >
                <Image
                  src="/images/why-us.png"
                  alt="Maereg Asnakew Deberu General Contractor team at work on a construction site"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#0F172A]/40 to-transparent" />
              </motion.div>
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  )
}
