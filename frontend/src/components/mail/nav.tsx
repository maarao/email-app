"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Account } from "./data"

interface NavProps {
  isCollapsed: boolean
  accounts: Account[]
}

export function Nav({ isCollapsed, accounts }: NavProps) {
  const navItems = [
    { label: "Inbox", icon: "home", count: 128 },
    { label: "Drafts", icon: "file", count: 9 },
    { label: "Sent", icon: "send" },
    { label: "Junk", icon: "alert-circle", count: 23 },
    { label: "Trash", icon: "trash" },
    { label: "Archive", icon: "archive" },
    { label: "Social", icon: "users", count: 972 },
  ]

  return (
    <div className="flex h-full flex-col gap-2">
      <div className="flex h-[52px] items-center justify-center">
        <Select defaultValue={accounts[0].email}>
          <SelectTrigger className="h-8 w-[180px]">
            <SelectValue placeholder="Select account" />
          </SelectTrigger>
          <SelectContent>
            {accounts.map((account) => (
              <SelectItem key={account.email} value={account.email}>
                <div className="flex items-center gap-3">
                  <div className="h-4 w-4">{account.icon}</div>
                  {!isCollapsed && (
                    <div className="flex flex-col">
                      <p className="text-sm font-medium leading-none">
                        {account.label}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {account.email}
                      </p>
                    </div>
                  )}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex-1">
        <nav className="grid items-start px-4 text-sm font-medium gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href="#"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "justify-between",
                item.label === "Inbox" && "bg-muted"
              )}
            >
              <div className="flex items-center gap-2">
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
                  {item.label === "Inbox" && (
                    <>
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </>
                  )}
                  {item.label === "Sent" && (
                    <>
                      <path d="m22 2-7 20-4-9-9-4Z" />
                      <path d="M22 2 11 13" />
                    </>
                  )}
                  {item.label === "Drafts" && (
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                  )}
                  {item.label === "Archive" && (
                    <>
                      <rect width="20" height="5" x="2" y="3" rx="1" />
                      <rect width="20" height="5" x="2" y="10" rx="1" />
                      <rect width="20" height="5" x="2" y="17" rx="1" />
                    </>
                  )}
                  {item.label === "Social" && (
                    <>
                      <circle cx="12" cy="12" r="10" />
                      <polygon points="10 8 16 12 10 16 10 8" />
                    </>
                  )}
                  {item.label === "Junk" && (
                    <>
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                    </>
                  )}
                  {item.label === "Trash" && (
                    <>
                      <path d="M3 6h18" />
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                    </>
                  )}
                </svg>
                {!isCollapsed && <span>{item.label}</span>}
              </div>
              {!isCollapsed && item.count && (
                <span className="text-xs text-muted-foreground">{item.count}</span>
              )}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
} 