import { Me } from '@/lib/me'
import Link from 'next/link'
import { FaChevronLeft } from 'react-icons/fa'

export default function Projects() {
  return (
    <main className="mx-auto flex min-h-screen w-[95%] max-w-lg flex-col items-center justify-center py-10">
      <div className="m-3 flex w-full">
        <Link href="/" className="flex items-center gap-1.5 text-white">
          <FaChevronLeft /> Voltar
        </Link>
      </div>
      {Me.projects.map((project, index) => (
        <div key={index} className="m-2 rounded-xl border-2 p-2 text-center">
          <div className="mb-2 flex h-20 items-center justify-center rounded-lg bg-neutral-200">
            <span className="text-neutral-950">Imagem</span>
          </div>
          <h2 className="mb-2 text-lg font-medium">{project.title}</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi
            odit ipsam error veniam iste temporibus.
          </p>
        </div>
      ))}
    </main>
  )
}
