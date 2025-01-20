import { MailWrapper } from "@/app/components/mail-wrapper"
import { accounts, mails } from "@/app/data"

export default function MailPage() {
  return (
    <>
      <div className="hidden flex-col md:flex">
        <MailWrapper
          accounts={accounts}
          mails={mails}
          defaultLayout={undefined}
          defaultCollapsed={undefined}
          navCollapsedSize={4}
        />
      </div>
    </>
  )
}
