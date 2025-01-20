import { Mail } from "@/app/components/mail"
import { accounts, mails } from "@/app/data"
import { MailProvider } from "@/hooks/use-mail"

export default function MailPage() {
  return (
    <>
      <div className="h-screen flex flex-col">
        <MailProvider>
          <Mail
            accounts={accounts}
            mails={mails}
            defaultLayout={[20, 32, 48]}
            defaultCollapsed={undefined}
            navCollapsedSize={4}
          />
        </MailProvider>
      </div>
    </>
  )
}
