import Link from 'next/link'
import { cn } from '@/lib/utils'

const base =
  'inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-heading font-bold uppercase tracking-widest transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring'

/**
 * PrimaryButton — solid gold call-to-action.
 * Renders a Next.js Link when `href` is provided, otherwise a button.
 */
export function PrimaryButton({ href, className, children, ...props }) {
  const classes = cn(
    base,
    'bg-primary text-primary-foreground shadow-md shadow-primary/25 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30',
    className,
  )
  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    )
  }
  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}

/**
 * SecondaryButton — outlined, adapts to light or dark surfaces via `dark` prop.
 */
export function SecondaryButton({ href, dark = false, className, children, ...props }) {
  const classes = cn(
    base,
    dark
      ? 'border-2 border-white/30 text-white hover:border-primary hover:text-primary'
      : 'border-2 border-foreground/20 text-foreground hover:border-primary hover:text-primary',
    className,
  )
  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    )
  }
  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
