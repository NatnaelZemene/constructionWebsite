'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Container } from '@/components/ui-kit/container'

const testimonials = [
  {
    quote: 'Maereg Asnakew Deberu General Contractor delivered our headquarters three weeks ahead of schedule. Their attention to detail and safety standards are unmatched in the region.',
    author: 'Dawit Alemu',
    role: 'CEO',
    company: 'Sheba Tech Solutions',
  },
  {
    quote: 'From the initial blueprint to the final walkthrough, the professionalism of the Maereg Asnakew Deberu General Contractor team was evident. They handled every challenge with expertise.',
    author: 'Selam Bekele',
    role: 'Director of Operations',
    company: 'Nile Valley Logistics',
  },
  {
    quote: 'We have worked with many contractors over the years, but Maereg Asnakew Deberu General Contractor stands out for their transparency and ability to keep complex projects within budget.',
    author: 'Michael Tesfaye',
    role: 'Property Manager',
    company: 'Horizon Living Group',
  },
]

export function TestimonialsSection() {
  const containerRef = useRef(null)
  const scrollRef = useRef(null)
  const inView = useInView(containerRef, { once: true, margin: '-80px' })
  const [activeIndex, setActiveIndex] = useState(0)

  // Track active slide on mobile scroll
  const handleScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft, clientWidth } = scrollRef.current
    const index = Math.round(scrollLeft / clientWidth)
    setActiveIndex(index)
  }

  return (
    <section className="bg-[#0F172A] py-24 md:py-32" aria-labelledby="testimonials-heading">
      <Container ref={containerRef} className="flex flex-col gap-16 overflow-hidden">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center"
        >
          <p className="font-heading text-xs font-extrabold uppercase tracking-[0.3em] text-[#1D4ED8]">Client Stories</p>
          <h2 id="testimonials-heading" className="text-balance font-heading text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Testimonials List */}
        <div className="relative w-full">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="no-scrollbar flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-8 md:grid md:grid-cols-3 md:overflow-x-visible md:pb-0"
          >
            {testimonials.map(({ quote, author, role, company }, i) => (
              <motion.article
                key={author}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex w-[85vw] shrink-0 snap-center flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#1D4ED8]/30 hover:bg-white/10 sm:w-[60vw] md:w-full md:snap-align-none"
              >
                {/* Quote mark */}
                <span className="font-heading text-5xl font-black leading-none text-[#1D4ED8]/30">"</span>
                <p className="flex-1 text-sm leading-relaxed text-white/80">{quote}</p>
                <div className="flex flex-col gap-1 border-t border-white/10 pt-6">
                  <p className="font-heading text-sm font-bold text-white">{author}</p>
                  <p className="font-heading text-xs font-semibold text-[#1D4ED8]/80">{role}</p>
                  <p className="font-heading text-xs text-white/40">{company}</p>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Premium Mobile Scroll Indicators / Dots */}
          <div className="mt-2 flex justify-center gap-2 md:hidden">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (scrollRef.current) {
                    const width = scrollRef.current.clientWidth
                    scrollRef.current.scrollTo({ left: idx * width, behavior: 'smooth' })
                  }
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'w-6 bg-[#1D4ED8]' : 'w-2 bg-white/20'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
