import { create } from "zustand"

interface MailState {
  selected: string
  setSelected: (id: string) => void
}

export const useMail = create<MailState>((set) => ({
  selected: "",
  setSelected: (id: string) => set({ selected: id }),
})) 