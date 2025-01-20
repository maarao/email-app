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
      <div className="flex items-center justify-between px-4 py-2 border-b">
        <div className="flex items-center gap-2">
          <h1 className="text-lg font-semibold">Inbox</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-xs font-normal h-8">All mail</Button>
          <Button variant="ghost" size="sm" className="text-xs font-normal h-8">Unread</Button>
          <div className="h-4 w-px bg-border mx-2" />
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><rect width="20" height="5" x="2" y="3" rx="1"/><rect width="20" height="5" x="2" y="10" rx="1"/><rect width="20" height="5" x="2" y="17" rx="1"/></svg>
          </Button>
        </div>
      </div>
      <div className="border-b">
        <div className="flex items-center px-4 h-9">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-muted-foreground mr-2 shrink-0"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <Input 
            type="search" 
            placeholder="Search mail..." 
            className="h-full border-0 focus-visible:ring-0 px-0 rounded-none bg-transparent placeholder:text-muted-foreground/70 text-sm"
          />
        </div>
      </div>
      <ScrollArea className="flex-1 px-2">
        <div className="flex flex-col py-2">
          {items.map((item) => (
            <button
              key={item.id}
              className={cn(
                "flex flex-col gap-1 p-3 text-left text-sm transition-all hover:bg-accent rounded-lg -mx-2",
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
                <div className="text-xs text-muted-foreground/70">
                  {format(new Date(item.date), "MMM d, yyyy")}
                </div>
              </div>
              <div className="text-xs font-medium">{item.subject}</div>
              <div className="line-clamp-2 text-xs text-muted-foreground/70">
                {item.text}
              </div>
              {item.labels.length ? (
                <div className="flex items-center gap-2 mt-2">
                  {item.labels.map((label) => (
                    <Badge 
                      key={label} 
                      variant={label === "work" ? "default" : "secondary"} 
                      className={cn(
                        "rounded px-1.5 font-normal text-[10px]",
                        label === "work" && "bg-black hover:bg-black/90"
                      )}
                    >
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