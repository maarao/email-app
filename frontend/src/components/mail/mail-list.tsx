"use client"

import { ComponentProps } from "react"
import { formatDistanceToNow } from "date-fns"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Mail } from "./data"

interface MailListProps {
  items: Mail[]
}

export function MailList({ items }: MailListProps) {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center p-2 border-b">
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="text-sm">All mail</Button>
          <Button variant="ghost" className="text-sm">Unread</Button>
        </div>
        <div className="flex items-center gap-2 ml-auto">
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
      <div className="p-4 border-b">
        <Input 
          type="search" 
          placeholder="Search mail..." 
          className="w-full"
        />
      </div>
      <ScrollArea className="flex-1">
        <div className="flex flex-col gap-2 p-4 pt-0">
          {items.map((item) => (
            <button
              key={item.id}
              className={cn(
                "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
                !item.read && "bg-muted"
              )}
            >
              <div className="flex w-full flex-col gap-1">
                <div className="flex items-center">
                  <div className="flex items-center gap-2">
                    <div className="font-semibold">{item.name}</div>
                    {!item.read && (
                      <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                    )}
                  </div>
                  <div
                    className={cn(
                      "ml-auto text-xs",
                      !item.read ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {formatDistanceToNow(new Date(item.date), {
                      addSuffix: true,
                    })}
                  </div>
                </div>
                <div className="text-xs font-medium">{item.subject}</div>
              </div>
              <div className="line-clamp-2 text-xs text-muted-foreground">
                {item.text}
              </div>
              {item.labels.length ? (
                <div className="flex items-center gap-2">
                  {item.labels.map((label) => (
                    <Badge key={label} variant="secondary">
                      {label}
                    </Badge>
                  ))}
                </div>
              ) : null}
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
} 