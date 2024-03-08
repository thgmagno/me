import { Me } from '@/lib/me'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import { FaChevronLeft } from 'react-icons/fa'

export default function Projects() {
  function Skeleton() {
    return <div className="h-52 animate-pulse rounded-xl bg-neutral-700" />
  }

  return (
    <main className="mx-auto flex min-h-screen w-[95%] max-w-lg flex-col items-center justify-center py-10">
      <div className="m-3 flex w-full">
        <Link href="/" className="flex items-center gap-1.5 text-white">
          <FaChevronLeft /> Voltar
        </Link>
      </div>
      {Me.projects.map((project, index) => (
        <div
          key={index}
          className="m-2 rounded-xl border-2 border-white/20 bg-neutral-950/40 p-2 text-center text-white"
        >
          <Suspense fallback={<Skeleton />}>
            <Image
              src={project.imageURL}
              alt={`Imagem do projeto ${project.title}`}
              className="h-full w-full rounded-xl object-cover"
              height={500}
              width={500}
            />
          </Suspense>
          <div className="mx-1.5 my-4 flex items-center justify-between">
            <h2 className="truncate text-xl font-medium">{project.title}</h2>
            <Button
              variant="bordered"
              className="border-white/20 text-white hover:bg-white hover:text-black"
            >
              <Link href={project.link}>Acessar o projeto</Link>
            </Button>
          </div>
          <p className="text-justify">{project.description}</p>
        </div>
      ))}
    </main>
  )
}
