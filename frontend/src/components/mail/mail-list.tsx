"use client"

import { ComponentProps } from "react"
import { format } from "date-fns"
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
      <div className="flex items-center justify-between p-2 border-b">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold">Inbox</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="text-sm font-normal">All mail</Button>
          <Button variant="ghost" className="text-sm font-normal">Unread</Button>
          <div className="h-4 w-px bg-border mx-2" />
          <Button variant="ghost" size="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
          </Button>
          <Button variant="ghost" size="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><rect width="20" height="5" x="2" y="3" rx="1"/><rect width="20" height="5" x="2" y="10" rx="1"/><rect width="20" height="5" x="2" y="17" rx="1"/></svg>
          </Button>
        </div>
      </div>
      <div className="border-b">
        <div className="flex items-center px-4 h-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-muted-foreground mr-2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <Input 
            type="search" 
            placeholder="Search mail..." 
            className="h-full border-0 focus-visible:ring-0 px-0 rounded-none"
          />
        </div>
      </div>
      <ScrollArea className="flex-1">
        <div className="flex flex-col">
          {items.map((item) => (
            <button
              key={item.id}
              className={cn(
                "flex flex-col gap-1 p-3 text-left text-sm transition-all hover:bg-accent border-b",
                !item.read && "bg-muted"
              )}
            >
              <div className="flex items-center gap-2">
                <div className="flex-1 flex items-center gap-2">
                  <div className="font-semibold">{item.name}</div>
                  {!item.read && (
                    <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                  )}
                </div>
                <div className="text-xs text-muted-foreground">
                  {format(new Date(item.date), "MMM d, yyyy")}
                </div>
              </div>
              <div className="text-xs font-medium">{item.subject}</div>
              <div className="line-clamp-2 text-xs text-muted-foreground">
                {item.text}
              </div>
              {item.labels.length ? (
                <div className="flex items-center gap-2 mt-1">
                  {item.labels.map((label) => (
                    <Badge key={label} variant={label === "work" ? "default" : "secondary"} className="rounded">
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