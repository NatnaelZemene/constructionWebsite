'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Container } from '@/components/ui-kit/container'

export function HeroSection() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, 400])
  const opacity = useTransform(scrollY, [0, 500], [1, 0])

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-[#0F172A]" aria-labelledby="hero-heading">
      {/* Parallax Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Construction site"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-50"
        />
        {/* Soft overlay gradient for better text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/80 to-transparent" aria-hidden="true" />
      </motion.div>

      <Container className="relative z-10 flex w-full flex-col items-start gap-8 py-24 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-[#1D4ED8]/30 bg-[#1D4ED8]/10 px-4 py-1.5 font-heading text-xs font-extrabold uppercase tracking-[0.25em] text-[#1D4ED8] shadow-lg shadow-[#1D4ED8]/5 backdrop-blur-md">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1D4ED8] opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-[#1D4ED8]"></span>
            </span>
            Trusted General Contractor in Ethiopia
          </p>
        </motion.div>

        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl text-balance font-heading text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Building <span className="text-[#1D4ED8]">Strong Foundations</span> for Ethiopia's Future
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-pretty text-lg leading-relaxed text-white/80 md:text-xl"
        >
          Maereg Asnakew Deberu General Contractor delivers reliable residential, commercial, and civil construction services with a strong commitment to quality, safety, and client satisfaction.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 flex flex-wrap items-center gap-4"
        >
          <a
            href="/#projects"
            className="group flex h-14 items-center justify-center gap-3 rounded-full bg-[#1D4ED8] px-8 font-heading text-sm font-bold uppercase tracking-widest text-white shadow-xl shadow-[#1D4ED8]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#1E3A8A] hover:shadow-[#1D4ED8]/40"
          >
            View Our Projects
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="/#contact"
            className="flex h-14 items-center justify-center rounded-full border-2 border-white/20 bg-white/5 px-8 font-heading text-sm font-bold uppercase tracking-widest text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-white/30"
          >
            Get a Free Quote
          </a>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="font-heading text-[10px] font-bold uppercase tracking-widest text-white/50">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex size-8 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-md"
        >
          <ChevronDown className="size-4 text-white/70" />
        </motion.div>
      </motion.div>
    </section>
  )
}
