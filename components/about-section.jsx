'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { ShieldCheck, Star, Clock, Handshake } from 'lucide-react'
import { Container } from '@/components/ui-kit/container'

const values = [
  { icon: Star, title: 'Quality Workmanship', description: 'We focus on delivering durable and professionally executed construction work.' },
  { icon: ShieldCheck, title: 'Safety First', description: 'Maintaining safe construction practices is a priority on every project.' },
  { icon: Clock, title: 'Reliable Delivery', description: 'We strive to complete projects efficiently and within agreed timelines.' },
  { icon: Handshake, title: 'Client Commitment', description: 'Building strong relationships through trust, transparency, and professionalism.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
}

export function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="scroll-mt-24 bg-white py-24 md:py-32" aria-labelledby="about-heading">
      <Container ref={ref} className="flex flex-col gap-20">

        {/* Top: Image + Text */}
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Image column */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] shadow-2xl shadow-[#0F172A]/10">
              <Image
                src="/images/about.png"
                alt="Maereg Asnakew Deberu General Contractor team on a construction site"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/30 via-transparent to-transparent" aria-hidden="true" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-6 -right-2 rounded-2xl bg-[#1D4ED8] p-6 shadow-xl shadow-[#1D4ED8]/30 md:-right-6"
            >
              <p className="font-heading text-4xl font-black text-white">18+</p>
              <p className="font-heading text-xs font-bold uppercase tracking-widest text-white/80">
                Years of<br />Excellence
              </p>
            </motion.div>
          </motion.div>

          {/* Text column */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={1}
            className="flex flex-col gap-8"
          >
            <div>
              <p className="mb-3 font-heading text-xs font-extrabold uppercase tracking-[0.3em] text-[#1D4ED8]">Who We Are</p>
              <h2 id="about-heading" className="text-balance font-heading text-4xl font-black leading-tight tracking-tight text-[#0F172A] md:text-5xl">
                About Maereg Asnakew Deberu<br />
                <span className="text-[#1D4ED8]">General Contractor</span>
              </h2>
            </div>

            <p className="text-base leading-relaxed text-[#334155]">
              Based in Gondar, Ethiopia, Maereg Asnakew Deberu General Contractor provides dependable construction services for residential, commercial, and civil projects. We are committed to delivering quality workmanship, maintaining safety standards, and building long-term relationships with our clients.
            </p>
            <p className="text-base leading-relaxed text-[#334155]">
              Our team works closely with engineers, architects, and project stakeholders to ensure every project is completed efficiently and professionally.
            </p>

            {/* Mission & Vision — glass cards */}
            <div className="mt-2 grid gap-4 sm:grid-cols-2">
              {[
                {
                  label: 'Our Mission',
                  text: 'To deliver reliable, high-quality construction services that contribute to the growth and development of communities across Ethiopia.',
                },
                {
                  label: 'Our Vision',
                  text: 'To become a trusted and respected construction contractor known for excellence, integrity, and client satisfaction.',
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[#1D4ED8]/20 bg-[#EFF6FF]/60 p-6 backdrop-blur-sm"
                >
                  <p className="mb-2 font-heading text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#1D4ED8]">{item.label}</p>
                  <p className="text-sm leading-relaxed text-[#334155]">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Value Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, description }, i) => (
            <motion.article
              key={title}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={i * 0.5}
              className="group flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-7 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-[#1D4ED8]/30 hover:shadow-xl hover:shadow-[#1D4ED8]/10"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#1D4ED8]/10 text-[#1D4ED8] transition-colors duration-300 group-hover:bg-[#1D4ED8] group-hover:text-white">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="font-heading text-base font-bold text-[#0F172A]">{title}</h3>
              <p className="text-sm leading-relaxed text-[#334155]/80">{description}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  )
}
