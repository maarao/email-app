"use client"

import { ComponentProps } from "react"
import { cn } from "@/lib/utils"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { Separator } from "@/components/ui/separator"
import { Nav } from "./nav"
import { MailList } from "./mail-list"
import { MailDisplay } from "./mail-display"
import { Account, Mail as MailType } from "./data"

interface MailProps {
  accounts: Account[]
  mails: MailType[]
  defaultLayout: number[] | undefined
  defaultCollapsed?: boolean
  navCollapsedSize: number
}

export function Mail({
  accounts,
  mails,
  defaultLayout = [265, 440, 655],
  defaultCollapsed = false,
  navCollapsedSize,
}: MailProps) {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      onLayout={(sizes: number[]) => {
        document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`
      }}
      className="h-full items-stretch"
    >
      <ResizablePanel
        defaultSize={defaultLayout[0]}
        collapsedSize={navCollapsedSize}
        collapsible={true}
        minSize={15}
        maxSize={20}
        onCollapse={(collapsed: boolean) => {
          document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
            collapsed
          )}`
        }}
        className={cn(defaultCollapsed && "min-w-[50px] transition-all duration-300 ease-in-out")}
      >
        <Nav accounts={accounts} isCollapsed={defaultCollapsed} />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
        <MailList items={mails} />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={defaultLayout[2]} minSize={30}>
        <MailDisplay />
      </ResizablePanel>
    </ResizablePanelGroup>
  )
} 