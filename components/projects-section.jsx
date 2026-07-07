'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { MapPin, ArrowUpRight, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Container } from '@/components/ui-kit/container'

const FILTERS = ['All', 'Residential', 'Commercial', 'Civil Works']

const projects = [
  { image: '/images/projects/project1.png', title: 'Gondar Riverside Villa Complex', category: 'Residential', location: 'Gondar, Amhara', description: 'A modern residential compound of 12 luxury villas with shared green spaces, built to the highest finishing standards.' },
  { image: '/images/projects/project2.png', title: 'Kebele Commercial Center', category: 'Commercial', location: 'Gondar, Amhara', description: 'A three-storey commercial facility housing retail units, offices, and a community hall, completed ahead of schedule.' },
  { image: '/images/projects/project3.jpg', title: 'Tekeze River Bridge Access Road', category: 'Civil Works', location: 'North Gondar Zone', description: 'A 4.2 km access road project including culverts, drainage channels, and retaining walls to serve rural communities.' },
  { image: '/images/projects/project4.png', title: 'Azezo Apartment Block', category: 'Residential', location: 'Azezo, Gondar', description: 'A G+4 residential apartment building with 24 units, modern finishes, and underground parking.' },
  { image: '/images/projects/project5.png', title: 'Maraki Hotel & Conference Center', category: 'Commercial', location: 'Gondar City', description: 'A boutique hotel and conference facility with 48 guest rooms, a rooftop terrace, and a 200-seat conference hall.' },
  { image: '/images/projects/project6.png', title: 'Chilga Rural Road Rehabilitation', category: 'Civil Works', location: 'Chilga Woreda, Amhara', description: 'Road rehabilitation and drainage improvement works covering 7 km of gravel road serving farming communities.' },
]

function LightboxModal({ projects, currentIndex, onClose, onPrev, onNext }) {
  const project = projects[currentIndex]
  if (!project) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-[#0F172A]/95 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button onClick={onClose} className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center rounded-full bg-[#0F172A]/60 text-white backdrop-blur-sm transition hover:bg-[#0F172A]" aria-label="Close">
          <X className="size-5" />
        </button>

        <div className="grid md:grid-cols-[60%_40%]">
          <div className="relative aspect-[4/3]">
            <Image src={project.image} alt={project.title} fill className="object-cover" sizes="60vw" />
          </div>
          <div className="flex flex-col justify-between p-8">
            <div className="flex flex-col gap-4">
              <span className="inline-flex w-fit rounded-full bg-[#1D4ED8]/15 px-3 py-1 font-heading text-[10px] font-bold uppercase tracking-widest text-[#1D4ED8]">{project.category}</span>
              <h3 className="font-heading text-xl font-black leading-snug text-[#0F172A]">{project.title}</h3>
              <p className="flex items-center gap-1.5 text-xs text-[#334155]/60"><MapPin className="size-3.5 shrink-0 text-[#1D4ED8]" />{project.location}</p>
              <p className="text-sm leading-relaxed text-[#334155]/80">{project.description}</p>
            </div>
            <p className="mt-4 font-heading text-xs text-[#334155]/40">{currentIndex + 1} / {projects.length}</p>
          </div>
        </div>

        {/* Prev/Next */}
        <button onClick={onPrev} className="absolute bottom-4 right-24 flex size-10 items-center justify-center rounded-full border border-gray-200 text-[#334155] transition hover:bg-[#1D4ED8] hover:border-[#1D4ED8] hover:text-white" aria-label="Previous project"><ChevronLeft className="size-5" /></button>
        <button onClick={onNext} className="absolute bottom-4 right-12 flex size-10 items-center justify-center rounded-full border border-gray-200 text-[#334155] transition hover:bg-[#1D4ED8] hover:border-[#1D4ED8] hover:text-white" aria-label="Next project"><ChevronRight className="size-5" /></button>
      </motion.div>
    </motion.div>
  )
}

function PortfolioCard({ image, title, category, location, description, onClick, index, inView }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0F172A]/10"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover transition-transform duration-500 ease-out group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute left-4 top-4 rounded-full bg-[#0F172A]/80 px-3 py-1 font-heading text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm">{category}</span>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="flex items-center gap-2 rounded-full bg-[#1D4ED8] px-5 py-2.5 font-heading text-xs font-bold uppercase tracking-widest text-white shadow-lg">View Project <ArrowUpRight className="size-4" /></span>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <p className="flex items-center gap-1.5 text-xs text-[#334155]/60"><MapPin className="size-3.5 shrink-0 text-[#1D4ED8]" />{location}</p>
        <h3 className="font-heading text-lg font-bold leading-snug text-[#0F172A]">{title}</h3>
        <span className="block h-0.5 w-8 rounded-full bg-[#1D4ED8] transition-all duration-300 group-hover:w-14" />
        <p className="flex-1 text-sm leading-relaxed text-[#334155]/80">{description}</p>
      </div>
    </motion.article>
  )
}

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const filtered = activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter)

  const openLightbox = (project) => {
    const idx = projects.findIndex((p) => p.title === project.title)
    setLightboxIndex(idx)
  }

  const filteredInAll = (idx) => {
    // Navigate within filtered set
    const filteredIdxs = filtered.map((p) => projects.indexOf(p))
    const current = filteredIdxs.indexOf(idx)
    return { filteredIdxs, current }
  }

  return (
    <>
      <AnimatePresence>
        {lightboxIndex !== null && (
          <LightboxModal
            projects={projects}
            currentIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onPrev={() => setLightboxIndex((i) => (i - 1 + projects.length) % projects.length)}
            onNext={() => setLightboxIndex((i) => (i + 1) % projects.length)}
          />
        )}
      </AnimatePresence>

      <section id="projects" className="scroll-mt-24 bg-white py-24 md:py-32" aria-labelledby="projects-heading">
        <Container ref={ref} className="flex flex-col gap-14">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center"
          >
            <p className="font-heading text-xs font-extrabold uppercase tracking-[0.3em] text-[#1D4ED8]">Our Portfolio</p>
            <h2 id="projects-heading" className="text-balance font-heading text-4xl font-black leading-tight tracking-tight text-[#0F172A] md:text-5xl">Featured Projects</h2>
            <p className="text-base leading-relaxed text-[#334155]/80">Explore some of our completed and ongoing construction projects across Ethiopia.</p>
          </motion.div>

          {/* Filter buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2"
            role="group"
            aria-label="Filter projects by category"
          >
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
                className={[
                  'rounded-full border px-6 py-2.5 font-heading text-xs font-bold uppercase tracking-widest transition-all duration-300',
                  activeFilter === filter
                    ? 'border-[#0F172A] bg-[#0F172A] text-white shadow-md'
                    : 'border-gray-200 bg-white text-[#334155] hover:border-[#1D4ED8] hover:text-[#1D4ED8]',
                ].join(' ')}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <PortfolioCard key={project.title} {...project} index={i} inView={inView} onClick={() => openLightbox(project)} />
              ))}
            </AnimatePresence>
          </div>
        </Container>
      </section>
    </>
  )
}
