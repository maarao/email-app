'use client'

import Image from "next/image"

import { Mail } from "@/app/components/mail"
import { accounts, mails } from "@/app/data"
import { MailProvider } from "@/app/use-mail"

export default function MailPage() {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/mail-dark.png"
          width={1280}
          height={727}
          alt="Mail"
          className="hidden dark:block"
        />
        <Image
          src="/examples/mail-light.png"
          width={1280}
          height={727}
          alt="Mail"
          className="block dark:hidden"
        />
      </div>
      <div className="hidden flex-col md:flex">
        <MailProvider>
          <Mail
            accounts={accounts}
            mails={mails}
            defaultLayout={undefined}
            defaultCollapsed={undefined}
            navCollapsedSize={4}
          />
        </MailProvider>
      </div>
    </>
  )
}
