'use client'

import { Me } from '@/lib/me'
import { Accordion, AccordionItem } from '@nextui-org/react'

export default function MainContent() {
  return (
    <div className="mb-5 flex w-full flex-col rounded-xl border-2 border-white/20 bg-neutral-950/40 px-4">
      {Me.mainContent.map((content, index) => (
        <Accordion
          variant="bordered"
          className="m-0 border-none p-0 text-justify text-white"
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
    </div>
  )
}
