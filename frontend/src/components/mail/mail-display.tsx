"use client"

import { ComponentProps } from "react"
import { formatDistanceToNow } from "date-fns"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Mail } from "./data"

export function MailDisplay() {
  const mail: Mail = {
    id: "3e7c3f6d-bdf5-46ae-8d90-171300f27ae2",
    name: "Emily Davis",
    email: "emilydavis@example.com",
    subject: "Re: Question about Budget",
    text: "I have a question about the budget for the upcoming project. It seems like there's a discrepancy in the allocation of resources.\n\nI've reviewed the budget report and identified a few areas where we might be able to optimize our spending without compromising the project's quality.\n\nI've attached a detailed analysis for your reference. Let's discuss this further in our next meeting.\n\nThanks, Emily",
    date: "2024-03-25T13:15:00",
    read: false,
    labels: ["work", "budget"],
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center justify-between p-2 border-b">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
          </Button>
          <Button variant="ghost" size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="m19 19-7-7 7-7" />
              <path d="M5 12h14" />
            </svg>
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M3 6h18" />
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            </svg>
          </Button>
          <Button variant="ghost" size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <rect width="20" height="5" x="2" y="3" rx="1" />
              <rect width="20" height="5" x="2" y="10" rx="1" />
              <rect width="20" height="5" x="2" y="17" rx="1" />
            </svg>
          </Button>
        </div>
      </div>
      <ScrollArea className="flex-1">
        <div className="flex flex-col p-4">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
              {mail.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <div className="font-semibold">{mail.name}</div>
                <div className="text-xs text-muted-foreground">
                  {formatDistanceToNow(new Date(mail.date), {
                    addSuffix: true,
                  })}
                </div>
              </div>
              <div className="text-sm text-muted-foreground">Reply-To: {mail.email}</div>
              <div className="text-xl font-semibold mt-2">{mail.subject}</div>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="whitespace-pre-wrap text-sm">{mail.text}</div>
        </div>
      </ScrollArea>
      <div className="p-4 border-t">
        <div className="rounded-lg border bg-background">
          <Textarea
            placeholder="Reply to email..."
            className="min-h-[100px] border-0 focus-visible:ring-0"
          />
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <Button>Send</Button>
              <Button variant="ghost" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 