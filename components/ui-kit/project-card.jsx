import Image from 'next/image'
import { cn } from '@/lib/utils'

/**
 * ProjectCard — image card with hover zoom and category / location meta.
 */
export function ProjectCard({ image, title, category, location, className }) {
  return (
    <article
      className={cn(
        'group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-xl',
        className,
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image || '/placeholder.svg'}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-1 p-6">
        <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary">{category}</p>
        <h3 className="text-lg font-bold text-card-foreground">{title}</h3>
        {location ? <p className="text-sm text-muted-foreground">{location}</p> : null}
      </div>
    </article>
  )
}
