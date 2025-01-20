"use client"

import { ComponentProps } from "react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Mail } from "./data"

export function MailDisplay() {
  const mail: Mail = {
    id: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
    name: "William Smith",
    email: "williamsmith@example.com",
    subject: "Meeting Tomorrow",
    text: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.\n\nPlease come prepared with any questions or insights you may have. Looking forward to our meeting!\n\nBest regards, William",
    date: "2023-10-22T09:00:00",
    read: true,
    labels: ["meeting", "work", "important"],
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center justify-between px-4 py-2 border-b h-12">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="m19 19-7-7 7-7"/><path d="M5 12h14"/></svg>
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><rect width="20" height="5" x="2" y="3" rx="1"/><rect width="20" height="5" x="2" y="10" rx="1"/><rect width="20" height="5" x="2" y="17" rx="1"/></svg>
          </Button>
        </div>
      </div>
      <ScrollArea className="flex-1">
        <div className="flex flex-col p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-sm font-medium dark:bg-zinc-800">
              WS
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-base font-semibold leading-none">{mail.name}</div>
                  <div className="text-sm text-zinc-500 mt-1">Reply-To: {mail.email}</div>
                </div>
                <div className="text-sm text-zinc-500">
                  {format(new Date(mail.date), "MMM d, yyyy, h:mm:ss a")}
                </div>
              </div>
              <div className="text-xl font-semibold mt-4">{mail.subject}</div>
            </div>
          </div>
          <Separator className="my-6" />
          <div className="text-sm leading-6 text-zinc-500">{mail.text}</div>
        </div>
      </ScrollArea>
      <div className="p-6 border-t">
        <div className="rounded-lg border bg-background">
          <Textarea
            placeholder={`Reply ${mail.name}...`}
            className="min-h-[100px] border-0 focus-visible:ring-0 resize-none text-sm px-4 py-3"
          />
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <Button size="sm">Send</Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Switch id="mute" className="h-4 w-7" />
              <label htmlFor="mute" className="text-sm text-zinc-500">Mute this thread</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 