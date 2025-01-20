"use client"

import * as React from "react"
import { ComponentProps } from "react"
import { format } from "date-fns"
import { Mail } from "./data"
import { useMail } from "@/hooks/use-mail"
import { cn } from "@/lib/utils"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface MailListProps {
  items: Mail[]
}

export function MailList({ items }: MailListProps) {
  const { selected, setSelected } = useMail()
  const [search, setSearch] = React.useState("")

  return (
    <div className="flex flex-col h-full">
      <div className="border-b px-4 py-2">
        <h1 className="text-xl font-bold">Inbox</h1>
        <div className="flex items-center gap-2 mt-2">
          <Button variant="ghost" size="sm" className="font-normal">All mail</Button>
          <Button variant="ghost" size="sm" className="font-normal text-muted-foreground">Unread</Button>
        </div>
      </div>
      <div className="border-b p-4">
        <form>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search"
              className="pl-8"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </form>
      </div>
      <div className="flex-1 overflow-auto">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelected(item.id)}
            className={cn(
              "flex flex-col gap-2 w-full items-start p-3 text-left text-sm transition-all hover:bg-accent",
              selected === item.id && "bg-muted"
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
                    selected === item.id
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {format(new Date(item.date), "PPpp")}
                </div>
              </div>
              <div className="text-xs font-medium">{item.subject}</div>
            </div>
            <div className="line-clamp-2 text-xs text-muted-foreground">
              {item.text.substring(0, 300)}
            </div>
            {item.labels && item.labels.length > 0 && (
              <div className="flex items-center gap-2">
                {item.labels.map((label) => (
                  <Badge key={label} variant="secondary" className="text-xs">
                    {label}
                  </Badge>
                ))}
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  )
} 