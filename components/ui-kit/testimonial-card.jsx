import { Quote } from 'lucide-react'

/**
 * TestimonialCard — quote card with author name, role, and company.
 */
export function TestimonialCard({ quote, author, role, company }) {
  return (
    <figure className="flex h-full flex-col gap-5 rounded-lg border border-border bg-card p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <Quote className="size-8 text-primary" aria-hidden="true" />
      <blockquote className="flex-1 text-pretty italic leading-relaxed text-muted-foreground">
        {'\u201C'}
        {quote}
        {'\u201D'}
      </blockquote>
      <figcaption>
        <p className="font-heading font-bold text-card-foreground">{author}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
        <p className="font-heading text-xs font-bold uppercase tracking-widest text-primary">{company}</p>
      </figcaption>
    </figure>
  )
}
