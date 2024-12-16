'use client'

import { cn } from '@/lib/utils'
import { Plus, Search } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function NavLinks() {
  const pathname = usePathname()

  const routes = [
    {
      name: 'Anunciar um projeto',
      href: '/projects/new',
      icon: Plus,
    },
    {
      name: 'Procurar um projeto',
      href: '/projects',
      icon: Search,
    },
  ]

  return (
    <nav className="flex items-center gap-x-8">
      {routes.map(({ href, name, icon: Icon }) => (
        <Link
          href={href}
          key={href}
          className={cn(
            'flex items-center gap-x-2 text-sm hover:text-primary',
            pathname === href && 'text-primary',
          )}
        >
          <Icon className="size-4" />
          {name}
        </Link>
      ))}
    </nav>
  )
}
