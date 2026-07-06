import { cn } from '@/lib/utils'

/**
 * SectionHeading — gold eyebrow + bold uppercase title + optional description.
 * `dark` flips text colors for navy sections. `align` = 'left' | 'center'.
 */
export function SectionHeading({ eyebrow, title, description, align = 'center', dark = false, className }) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow ? (
        <p className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
      ) : null}
      <h2
        className={cn(
          'text-balance text-3xl font-extrabold uppercase leading-tight tracking-tight md:text-4xl',
          dark ? 'text-white' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'max-w-2xl text-pretty leading-relaxed',
            dark ? 'text-white/70' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
