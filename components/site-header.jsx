'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Container } from '@/components/ui-kit/container'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#services', label: 'Services' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#contact', label: 'Contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activePath, setActivePath] = useState('/')
  const pathname = usePathname()
  
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  // Update active path for the indicator (basic implementation for hash routes)
  useEffect(() => {
    const handleHashChange = () => {
      setActivePath(window.location.pathname + window.location.hash)
    }
    
    // Initial set
    handleHashChange()
    
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [pathname])

  return (
    <motion.header 
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100" 
          : "bg-transparent border-b border-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <Container className="flex h-20 items-center justify-between md:h-24">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3" aria-label="Maereg Asnakew Deberu General Contractor home">
          <motion.div 
            className="relative size-12 shrink-0 overflow-hidden rounded-xl bg-white p-1 shadow-md transition-transform duration-300 group-hover:scale-105"
          >
            <Image
              src="/images/logo.png"
              alt="Maereg Asnakew Deberu General Contractor Logo"
              fill
              className="object-contain p-0.5"
            />
          </motion.div>
          <span className={cn(
            "font-heading text-sm font-black uppercase leading-tight tracking-tight transition-colors duration-300",
            isScrolled ? "text-[#0F172A]" : "text-white"
          )}>
            Maereg Asnakew Deberu <span className="block text-[#1D4ED8]">General Contractor</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-2 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = activePath === link.href || (activePath === '/' && link.href === '/')
            
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 font-heading text-xs font-bold uppercase tracking-widest transition-colors"
                onClick={() => setActivePath(link.href)}
              >
                <span className={cn(
                  "relative z-10 transition-colors duration-300",
                  isActive 
                    ? "text-[#1D4ED8]" 
                    : isScrolled ? "text-[#334155] hover:text-[#0F172A]" : "text-white/80 hover:text-white"
                )}>
                  {link.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 z-0 rounded-full bg-[#1D4ED8]/10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link 
            href="/#contact"
            className="relative overflow-hidden rounded-full bg-[#1D4ED8] px-6 py-3 font-heading text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-[#1D4ED8]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1E3A8A] hover:shadow-[#1D4ED8]/40"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className={cn(
            "flex size-10 items-center justify-center rounded-full transition-colors md:hidden",
            isScrolled ? "text-[#0F172A] hover:bg-gray-100" : "text-white hover:bg-white/10"
          )}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
        </button>
      </Container>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {open && (
          <motion.nav 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-gray-100 bg-white shadow-xl md:hidden" 
            aria-label="Mobile navigation"
          >
            <Container className="flex flex-col gap-2 py-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => {
                      setOpen(false)
                      setActivePath(link.href)
                    }}
                    className={cn(
                      "block rounded-xl px-4 py-3 font-heading text-sm font-bold uppercase tracking-widest transition-colors",
                      activePath === link.href
                        ? "bg-[#1D4ED8]/10 text-[#1D4ED8]"
                        : "text-[#334155] hover:bg-gray-50 hover:text-[#0F172A]"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="mt-4"
              >
                <Link 
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="block w-full rounded-xl bg-[#1D4ED8] px-4 py-4 text-center font-heading text-sm font-bold uppercase tracking-widest text-white shadow-lg shadow-[#1D4ED8]/20 transition-colors hover:bg-[#1E3A8A]"
                >
                  Get a Quote
                </Link>
              </motion.div>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
