import { Me } from '@/lib/me'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between space-x-8 rounded-xl border-2 border-white/20 bg-neutral-950/40 p-5 text-white">
      <div>
        <h1 className="text-lg font-medium">{Me.nome}</h1>
        <p className="text-sm">{Me.bio}</p>
      </div>
      <div>
        <Image
          src={Me.imageURL}
          width={80}
          height={80}
          alt={`Foto do ${Me.nome}`}
          className="rounded-full border-2 border-white"
        />
      </div>
    </header>
  )
}
