"use client"

import * as React from "react"
import {
  AlertCircle,
  Archive,
  ArchiveX,
  File,
  Inbox,
  MessagesSquare,
  PenBox,
  Search,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Separator } from "@/components/ui/separator"

interface NavProps {
  isCollapsed: boolean
  links: {
    label: string
    email: string
    icon: React.ReactNode
  }[]
}

const navItems = [
  {
    label: "Inbox",
    icon: Inbox,
    count: 128,
  },
  {
    label: "Drafts",
    icon: File,
    count: 9,
  },
  {
    label: "Sent",
    icon: Send,
  },
  {
    label: "Junk",
    icon: ArchiveX,
    count: 23,
  },
  {
    label: "Trash",
    icon: Trash2,
  },
  {
    label: "Archive",
    icon: Archive,
  },
]

const navItemsBottom = [
  {
    label: "Social",
    icon: Users2,
    count: 972,
  },
  {
    label: "Updates",
    icon: AlertCircle,
    count: 342,
  },
  {
    label: "Forums",
    icon: MessagesSquare,
    count: 128,
  },
  {
    label: "Shopping",
    icon: ShoppingCart,
    count: 8,
  },
  {
    label: "Promotions",
    icon: Archive,
    count: 21,
  },
]

export function Nav({ links, isCollapsed }: NavProps) {
  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
    >
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) =>
          isCollapsed ? (
            <Tooltip key={index} delayDuration={0}>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  className="h-9 w-9"
                >
                  {link.icon}
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" className="flex items-center gap-4">
                {link.label}
                <span className="ml-auto text-muted-foreground">
                  {link.email}
                </span>
              </TooltipContent>
            </Tooltip>
          ) : (
            <Button
              key={index}
              variant="ghost"
              className="justify-start"
            >
              {link.icon}
              <span className="ml-3">{link.label}</span>
            </Button>
          )
        )}
      </nav>
      <Separator className="my-2" />
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {navItems.map((item, index) => (
          <Tooltip key={index} delayDuration={0}>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  "h-9 w-full",
                  isCollapsed && "w-9 p-0",
                  item.label === "Inbox" && "bg-muted/50"
                )}
              >
                <item.icon className={cn("h-4 w-4", isCollapsed ? "mr-0" : "mr-2")} />
                {!isCollapsed && (
                  <>
                    <span className="flex-1 text-left">{item.label}</span>
                    {item.count && (
                      <span className="text-muted-foreground">{item.count}</span>
                    )}
                  </>
                )}
              </Button>
            </TooltipTrigger>
            {isCollapsed && (
              <TooltipContent side="right" className="flex items-center gap-4">
                {item.label}
                {item.count && (
                  <span className="ml-auto text-muted-foreground">{item.count}</span>
                )}
              </TooltipContent>
            )}
          </Tooltip>
        ))}
      </nav>
      <Separator className="my-2" />
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {navItemsBottom.map((item, index) => (
          <Tooltip key={index} delayDuration={0}>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  "h-9 w-full",
                  isCollapsed && "w-9 p-0"
                )}
              >
                <item.icon className={cn("h-4 w-4", isCollapsed ? "mr-0" : "mr-2")} />
                {!isCollapsed && (
                  <>
                    <span className="flex-1 text-left">{item.label}</span>
                    {item.count && (
                      <span className="text-muted-foreground">{item.count}</span>
                    )}
                  </>
                )}
              </Button>
            </TooltipTrigger>
            {isCollapsed && (
              <TooltipContent side="right" className="flex items-center gap-4">
                {item.label}
                {item.count && (
                  <span className="ml-auto text-muted-foreground">{item.count}</span>
                )}
              </TooltipContent>
            )}
          </Tooltip>
        ))}
      </nav>
    </div>
  )
} 