import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ContactSection } from '@/components/contact-section'
import { Container } from '@/components/ui-kit/container'

export const metadata = {
  title: 'Contact Us | Maereg Asnakew Deberu General Contractor',
  description:
    'Get in touch with Maereg Asnakew Deberu General Contractor to discuss your next construction project in Ethiopia.',
}

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Page hero */}
        <section className="relative bg-navy" aria-labelledby="contact-page-heading">
          <div className="absolute inset-0">
            <Image
              src="/images/hero.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-45"
            />
            <div className="absolute inset-0 bg-navy/70" aria-hidden="true" />
          </div>
          <Container className="relative flex flex-col items-center gap-4 py-20 text-center md:py-28">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-[0.2em]">
                <li>
                  <Link href="/" className="text-primary hover:underline">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="text-white/40">
                  /
                </li>
                <li className="text-white/70" aria-current="page">
                  Contact Us
                </li>
              </ol>
            </nav>
            <h1
              id="contact-page-heading"
              className="text-balance font-heading text-5xl font-black uppercase tracking-tight text-white md:text-6xl"
            >
              Contact Us
            </h1>
            <p className="max-w-xl text-pretty leading-relaxed text-white/70">
              Get in touch to discuss your next construction project.
            </p>
          </Container>
        </section>

        <ContactSection />

        {/* Map band */}
        <section className="relative h-72 md:h-96" aria-label="Office location map">
          <Image
            src="/images/hero-construction.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-bottom"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-navy/60 text-center">
            <p className="font-heading text-sm font-bold uppercase tracking-[0.3em] text-white/80">
              Interactive Map
            </p>
            <p className="text-xs text-white/60">Main Road, City Center, Gondar</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
