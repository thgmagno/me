import { Me } from '@/lib/me'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between space-x-4 rounded-xl border-2 border-white/20 bg-neutral-950/40 p-5 text-white">
      <div>
        <Image
          src={Me.imageURL}
          width={80}
          height={80}
          alt={`Foto do ${Me.name}`}
          className="rounded-full border-2 border-white/20"
        />
      </div>
      <div className="flex-1">
        <h1 className="text-lg font-medium">{Me.name}</h1>
        <p className="text-sm">{Me.bio}</p>
      </div>
    </header>
  )
}
