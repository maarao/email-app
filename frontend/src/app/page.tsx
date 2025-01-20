import { Mail } from "@/app/components/mail"
import { accounts, mails } from "@/app/data"
import { MailProvider } from "@/hooks/use-mail"

export default function MailPage() {
  return (
    <>
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
