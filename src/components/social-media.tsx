import { Me } from '@/lib/me'
import { Chip } from '@nextui-org/react'
import Link from 'next/link'

export default function SocialMedia() {
  return (
    <>
      <section className="mb-5 mt-3 flex w-full max-w-lg flex-wrap items-baseline justify-center space-x-1.5 space-y-2 sm:hidden">
        {Me.socialMedia.map((media) => (
          <Chip key={media.label} size="sm">
            <div className="relative top-0.5 mr-1 inline-flex">
              {media.icon}
            </div>
            <Link href={media.link} target="_blank">
              {media.label}
            </Link>
          </Chip>
        ))}
      </section>

      <section className="mb-5 mt-3 hidden w-full max-w-lg flex-wrap items-baseline justify-center space-x-1.5 space-y-2 sm:flex">
        {Me.socialMedia.map((media) => (
          <Chip key={media.label}>
            <div className="relative top-0.5 mr-1 inline-flex">
              {media.icon}
            </div>
            <Link href={media.link} target="_blank">
              {media.label}
            </Link>
          </Chip>
        ))}
      </section>
    </>
  )
}
