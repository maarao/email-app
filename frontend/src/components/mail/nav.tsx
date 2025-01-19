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
        <nav className="grid items-start px-4 text-sm font-medium">
          <Link
            href="#"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "justify-start",
              "bg-muted"
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-4 w-4"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            {!isCollapsed && <span>Inbox</span>}
          </Link>
          <Link
            href="#"
            className={cn(buttonVariants({ variant: "ghost" }), "justify-start")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-4 w-4"
            >
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
            {!isCollapsed && <span>Sent</span>}
          </Link>
          <Link
            href="#"
            className={cn(buttonVariants({ variant: "ghost" }), "justify-start")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-4 w-4"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
            {!isCollapsed && <span>Drafts</span>}
          </Link>
          <Link
            href="#"
            className={cn(buttonVariants({ variant: "ghost" }), "justify-start")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-4 w-4"
            >
              <rect width="20" height="5" x="2" y="3" rx="1" />
              <rect width="20" height="5" x="2" y="10" rx="1" />
              <rect width="20" height="5" x="2" y="17" rx="1" />
            </svg>
            {!isCollapsed && <span>Archive</span>}
          </Link>
          <Link
            href="#"
            className={cn(buttonVariants({ variant: "ghost" }), "justify-start")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-4 w-4"
            >
              <circle cx="12" cy="12" r="10" />
              <polygon points="10 8 16 12 10 16 10 8" />
            </svg>
            {!isCollapsed && <span>Social</span>}
          </Link>
          <Link
            href="#"
            className={cn(buttonVariants({ variant: "ghost" }), "justify-start")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-4 w-4"
            >
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
              <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            </svg>
            {!isCollapsed && <span>Junk</span>}
          </Link>
          <Link
            href="#"
            className={cn(buttonVariants({ variant: "ghost" }), "justify-start")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-4 w-4"
            >
              <path d="M3 6h18" />
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            </svg>
            {!isCollapsed && <span>Trash</span>}
          </Link>
        </nav>
      </div>
    </div>
  )
} 