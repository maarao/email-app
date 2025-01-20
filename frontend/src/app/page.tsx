import Image from "next/image"
import { Mail } from "@/app/components/mail"
import { accounts, mails } from "@/app/data"

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
        <Mail
          accounts={accounts}
          mails={mails}
          defaultLayout={[25, 50, 25]}
          defaultCollapsed={false}
          navCollapsedSize={4}
        />
      </div>
    </>
  )
}
