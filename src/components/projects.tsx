import { Me } from '@/lib/me'
import { Tooltip } from '@nextui-org/react'
import Link from 'next/link'

export default function Projects() {
  return (
    <section className="grid w-full grid-cols-2 rounded-xl border-2 border-white/20 bg-neutral-950/40 p-4 text-white">
      <h2 className="col-span-2 mb-2 text-xl">Projetos</h2>
      {Me.projects.slice(0, 4).map((project, index) => (
        <Link href={project.link}>
          <Tooltip content={`Ir para ${project.title}`} color="foreground">
            <div
              key={index}
              className="m-2 rounded-xl border-2 p-2 text-center"
            >
              <div className="mb-2 flex h-20 items-center justify-center rounded-lg bg-neutral-200">
                <span className="text-neutral-950">Imagem</span>
              </div>
              <h2 className="mb-2 text-lg font-medium">{project.title}</h2>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                quasi odit ipsam error veniam iste temporibus.
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
