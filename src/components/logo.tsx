import Image from 'next/image'

export function Logo() {
  return (
    <div className="flex items-center gap-x-2">
      <Image src="logo.svg" alt="Logo" width={28} height={28} />

      <span className="text-xl font-semibold hidden lg:block">
        Freela Match
      </span>
    </div>
  )
}
