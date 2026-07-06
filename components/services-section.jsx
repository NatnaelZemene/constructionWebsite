'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Building2, House, Landmark, HardHat, Hammer, ClipboardCheck } from 'lucide-react'
import { Container } from '@/components/ui-kit/container'

const services = [
  { icon: Building2, title: 'General Contracting', description: 'Complete construction management from planning to project completion with quality workmanship and professional supervision.' },
  { icon: House, title: 'Residential Construction', description: 'Construction of modern homes, villas, apartments, and residential buildings designed to meet client expectations.' },
  { icon: Landmark, title: 'Commercial Construction', description: 'Construction of office buildings, retail spaces, hotels, schools, and commercial facilities.' },
  { icon: HardHat, title: 'Civil Works', description: 'Roads, drainage systems, foundations, retaining walls, and other civil engineering works.' },
  { icon: Hammer, title: 'Renovation & Finishing', description: 'Interior and exterior renovation, finishing works, painting, tiling, ceilings, and remodeling.' },
  { icon: ClipboardCheck, title: 'Site Supervision', description: 'Professional supervision to ensure quality, safety, scheduling, and proper execution throughout the project.' },
]

function ServiceCard({ icon: Icon, title, description, index, inView }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group flex h-full flex-col gap-5 rounded-2xl border border-gray-100 bg-white p-8 shadow-md transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#1D4ED8]/20 hover:shadow-2xl hover:shadow-[#0F172A]/10"
    >
      {/* Animated icon tile */}
      <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-[#0F172A] shadow-lg shadow-[#0F172A]/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1D4ED8] group-hover:shadow-[#1D4ED8]/30">
        <Icon className="size-7 text-white" aria-hidden="true" />
      </span>

      {/* Title */}
      <h3 className="font-heading text-xl font-bold leading-snug text-[#0F172A]">{title}</h3>

      {/* Animated gold divider */}
      <span className="block h-0.5 w-10 rounded-full bg-[#1D4ED8]/60 transition-all duration-300 group-hover:w-16 group-hover:bg-[#1D4ED8]" />

      {/* Description */}
      <p className="flex-1 text-sm leading-relaxed text-[#334155]/80">{description}</p>
    </motion.article>
  )
}

export function ServicesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="scroll-mt-24 bg-[#F8FAFC] py-24 md:py-32" aria-labelledby="services-heading">
      <Container ref={ref} className="flex flex-col gap-16">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center"
        >
          <p className="font-heading text-xs font-extrabold uppercase tracking-[0.3em] text-[#1D4ED8]">What We Do</p>
          <h2 id="services-heading" className="text-balance font-heading text-4xl font-black leading-tight tracking-tight text-[#0F172A] md:text-5xl">
            Our Construction Services
          </h2>
          <p className="text-base leading-relaxed text-[#334155]/80">
            We provide dependable construction solutions for residential, commercial, and civil projects throughout Ethiopia.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} inView={inView} />
          ))}
        </div>
      </Container>
    </section>
  )
}
