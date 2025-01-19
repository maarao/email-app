import { cookies } from "next/headers"
import { Mail } from "@/components/mail"
import { accounts, mails } from "@/components/mail/data"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"

export default async function Home() {
  const cookieStore = await cookies()
  const layout = cookieStore.get("react-resizable-panels:layout")
  const collapsed = cookieStore.get("react-resizable-panels:collapsed")

  const defaultLayout = layout ? JSON.parse(layout.value) : undefined
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined

  return (
    <div className="h-screen">
      <div className="hidden flex-col md:flex h-full">
        <Mail
          accounts={accounts}
          mails={mails}
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
        />
      </div>
      <div className="block md:hidden p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Please use a larger screen</h1>
        <p className="text-muted-foreground">
          This email application is optimized for desktop and tablet views.
        </p>
      </div>
    </div>
  )
}
