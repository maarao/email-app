'use client'

import { createContext, useContext, useState } from "react"
import { Mail, mails } from "@/app/data"

type MailContextType = {
  selected: Mail["id"] | null
  setSelected: (id: Mail["id"] | null) => void
}

const MailContext = createContext<MailContextType | undefined>(undefined)

export function MailProvider({ children }: { children: React.ReactNode }) {
  const [selected, setSelected] = useState<Mail["id"] | null>(mails[0].id)

  return (
    <MailContext.Provider value={{ selected, setSelected }}>
      {children}
    </MailContext.Provider>
  )
}

export function useMail() {
  const context = useContext(MailContext)
  if (context === undefined) {
    throw new Error("useMail must be used within a MailProvider")
  }
  return [
    { selected: context.selected },
    context.setSelected,
  ] as const
} 