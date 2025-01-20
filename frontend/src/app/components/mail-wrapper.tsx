'use client'

import { Mail } from "@/app/components/mail"
import { type Mail as MailType, type Account } from "@/app/data"
import { MailProvider } from "@/hooks/use-mail"

interface MailWrapperProps {
  accounts: Account[]
  mails: MailType[]
  defaultLayout?: number[]
  defaultCollapsed?: boolean
  navCollapsedSize: number
}

export function MailWrapper({
  accounts,
  mails,
  defaultLayout,
  defaultCollapsed,
  navCollapsedSize,
}: MailWrapperProps) {
  return (
    <MailProvider>
      <Mail
        accounts={accounts}
        mails={mails}
        defaultLayout={defaultLayout}
        defaultCollapsed={defaultCollapsed}
        navCollapsedSize={navCollapsedSize}
      />
    </MailProvider>
  )
} 