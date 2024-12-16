import { cookies } from 'next/headers'
import Link from 'next/link'

import { Logo } from './logo'
import { NavLinks } from './nav-links'
import { SignInButton } from './sign-in-button'
import { Separator } from './ui/separator'

export async function Navbar() {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get('access_token')?.value

  return (
    <header className="h-16 px-16 flex items-center justify-between border-b">
      <div className="flex items-center gap-x-5">
        <Link href="/">
          <Logo />
        </Link>
        <Separator orientation="vertical" className="h-6" />
        <NavLinks />
      </div>
      {accessToken ? <p>test</p> : <SignInButton />}
    </header>
  )
}
