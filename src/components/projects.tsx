import { Me } from '@/lib/me'
import { Tooltip } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'

export default function Projects() {
  return (
    <section className="grid w-full grid-cols-2 gap-2.5 rounded-xl border-2 border-white/20 bg-neutral-950/40 p-4 text-white">
      <h2 className="col-span-2 mb-2 text-xl">Projetos</h2>
      {Me.projects.slice(0, 4).map((project, index) => (
        <Link href={project.link} target="_blank">
          <Tooltip content={`Ir para ${project.title}`} color="foreground">
            <div
              key={index}
              className="flex h-full flex-col rounded-xl border-2 border-white/20 p-2"
            >
              <div className="mb-2">
                <Image
                  src={project.imageURL}
                  alt={`Imagem do projeto ${project.title}`}
                  className="h-full w-full rounded-xl object-cover"
                  height={250}
                  width={250}
                />
              </div>
              <h2 className="mb-2 truncate text-center text-lg font-medium">
                {project.title}
              </h2>
              <p className="flex-1 text-center text-sm md:text-justify">
                {project.description}
              </p>
            </div>
          </Tooltip>
        </Link>
      ))}
      <div className="col-span-2 mt-3 flex justify-center">
        <Link
          href="/projetos"
          className="bg-transparent font-medium text-white hover:underline"
        >
          Visualizar todos os projetos
        </Link>
      </div>
    </section>
  )
}
