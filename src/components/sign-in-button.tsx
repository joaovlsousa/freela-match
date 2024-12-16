import { Github } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'

export function SignInButton() {
  return (
    <Button asChild>
      <Link
        href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
      >
        <Github className="size-4 mr-1" />
        Entre com o github
      </Link>
    </Button>
  )
}
