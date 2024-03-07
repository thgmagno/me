'use client'

import { Me } from '@/lib/me'
import { Accordion, AccordionItem } from '@nextui-org/react'

export default function MainContent() {
  return (
    <>
      {Me.mainContent.map((content, index) => (
        <Accordion
          variant="bordered"
          className="mb-5 border-2 border-white/20 bg-neutral-950/40 text-white"
        >
          <AccordionItem
            key={index}
            aria-label={content.title}
            title={<h2 className="text-white">{content.title}</h2>}
          >
            {content.description}
          </AccordionItem>
        </Accordion>
      ))}
    </>
  )
}
