"use client"

import { ComponentProps } from "react"
import { formatDistanceToNow } from "date-fns"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
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
    <ScrollArea className="h-screen">
      <div className="flex flex-col p-4">
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <div className="font-semibold">{mail.name}</div>
          </div>
          <div className="ml-auto text-xs text-muted-foreground">
            {formatDistanceToNow(new Date(mail.date), {
              addSuffix: true,
            })}
          </div>
        </div>
        <div className="text-sm font-medium">{mail.subject}</div>
        <Separator className="my-4" />
        <div className="whitespace-pre-wrap text-sm">{mail.text}</div>
      </div>
    </ScrollArea>
  )
} 