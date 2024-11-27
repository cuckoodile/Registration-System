// Shadcn components
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import {
  ArrowBigRightDash,
  ArrowBigLeftDash
} from "lucide-react"

import React from "react"
import { Outlet } from "react-router-dom"


function App() {
  const [open, setOpen] = React.useState(true)


  return (
    <SidebarProvider open={open} onOpenChange={setOpen} >
      <main className="dark bg-background w-screen h-screen flex text-foreground">
        <AppSidebar />
        <aside className="size-full">
          {/* Header content */}
          <header className="w-full p-2 border-b-2 flex items-center gap-2">
            <SidebarTrigger currentSate={open} labelIcon={open ? ArrowBigLeftDash : ArrowBigRightDash} label={open ? 'Close' : 'Open'} className="bg-primary text-secondary-foreground hover:bg-secondary hover:text-white" />
          </header>
          {/* Main content */}
          <section className="p-4">
            <Outlet />
          </section>
        </aside>
      </main>
    </SidebarProvider>
  )
}

export default App