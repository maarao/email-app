export const mails = [
  {
    id: "1",
    name: "Example User",
    email: "example@example.com",
    subject: "Example Email",
    text: "This is an example email to demonstrate the UI.",
    date: "2024-01-20T09:00:00",
    read: true,
    labels: ["example"],
  }
]

export type Mail = (typeof mails)[number]

export const accounts = [
  {
    label: "Example Account",
    email: "example@example.com",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Example</title>
        <path d="M24 22.525H0l12-21.05 12 21.05z" fill="currentColor" />
      </svg>
    ),
  }
]

export type Account = (typeof accounts)[number]

export const contacts = [
  {
    name: "Example Contact",
    email: "contact@example.com",
  }
]

export type Contact = (typeof contacts)[number]
