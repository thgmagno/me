import { Me } from '@/lib/me'
import { Chip } from '@nextui-org/react'
import Link from 'next/link'

export default function SocialMedia() {
  return (
    <>
      <section className="my-5 flex w-full items-center space-x-1.5 sm:hidden">
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

      <section className="my-5 hidden w-full items-center space-x-1.5 sm:flex">
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
