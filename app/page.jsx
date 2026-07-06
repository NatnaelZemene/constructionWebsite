import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ServicesSection } from '@/components/services-section'
import { ProjectsSection } from '@/components/projects-section'
import { WhyChooseUsSection } from '@/components/why-choose-us-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ContactSection } from '@/components/contact-section'
import { Container } from '@/components/ui-kit/container'

const stats = [
  { value: '350+', label: 'Projects Completed' },
  { value: '11', label: 'Regions Covered' },
  { value: '100%', label: 'Happy Clients' },
  { value: '24', label: 'Awards Won' },
]

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero — premium parallax + Framer Motion */}
        <HeroSection />

        {/* About */}
        <AboutSection />

        {/* Services */}
        <ServicesSection />

        {/* Stats — premium dark navy band */}
        <section className="bg-[#0F172A] py-20" aria-label="Company statistics">
          <Container className="grid grid-cols-2 gap-10 lg:grid-cols-4">
            {stats.map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 text-center">
                <p className="font-heading text-5xl font-black text-[#1D4ED8] md:text-6xl">{value}</p>
                <p className="font-heading text-xs font-bold uppercase tracking-[0.22em] text-white/60">{label}</p>
              </div>
            ))}
          </Container>
        </section>

        {/* Why Choose Us */}
        <WhyChooseUsSection />

        {/* Projects */}
        <ProjectsSection />

        {/* Testimonials */}
        <TestimonialsSection />

        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
