import { cn } from '@/lib/utils'

/**
 * ServiceCard — white card with gold icon tile, title, and description.
 */
export function ServiceCard({ icon: Icon, title, description, className }) {
  return (
    <article
      className={cn(
        'group flex flex-col gap-4 rounded-lg border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl',
        className,
      )}
    >
      <span className="flex size-12 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
        {Icon ? <Icon className="size-6" aria-hidden="true" /> : null}
      </span>
      <h3 className="text-lg font-bold text-card-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </article>
  )
}
