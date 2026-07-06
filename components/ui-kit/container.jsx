import { cn } from '@/lib/utils'

/**
 * Container — consistent max-width + horizontal padding for every section.
 */
export function Container({ className, children, ...props }) {
  return (
    <div className={cn('mx-auto w-full max-w-6xl px-5 md:px-8', className)} {...props}>
      {children}
    </div>
  )
}
