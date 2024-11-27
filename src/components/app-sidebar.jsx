import * as React from "react"
import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  SquareTerminal,
  Home,
  NotebookText
} from "lucide-react"
import { Link } from "react-router-dom"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar"
import MyCustomDialog from "./MyDialog"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      id: 1,
      title: "Dashboard",
      url: "/",
      icon: Home,
    },
    {
      id: 2,
      title: "About",
      url: "/about",
      icon: NotebookText,
    },
    {
      id: 3,
      title: "Contact",
      url: "/contact",
      icon: SquareTerminal,
    },
  ],
}

export function AppSidebar({
  ...props
}) {

  const [isDialogOpen, setIsDialogOpen] = React.useState(false)

  return (
    (<Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent className="list-none px-2">
        {/* <NavMain items={data.navMain} /> */}
        {data.navMain.map((page) => (
          <SidebarMenuItem key={page.title}>
            <SidebarMenuButton asChild tooltip={page.title}>
              <Link to={page.url}>
                <page.icon />
                <span>{page.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} setState={setIsDialogOpen} />
        <MyCustomDialog data={{ title: "Add New Student", description: "Enter new student's data", enter: "Submit" }} open={isDialogOpen} setOpen={setIsDialogOpen}>
          <section className="flex justify-between w-full gap-[1rem]">
            <label htmlFor="">Full Name</label>
            <input type="text" className="text-black" />
          </section>
          <section className="flex justify-between w-full gap-[1rem]">
            <label htmlFor="">Grade</label>
            <input type="text" className="text-black" />
          </section>
          <section className="flex justify-between w-full gap-[1rem]">
            <label htmlFor="">Section</label>
            <input type="text" className="text-black" />
          </section>
          <section className="flex justify-between w-full gap-[1rem]">
            <label htmlFor="">Status</label>
            <input type="text" className="text-black" />
          </section>
        </MyCustomDialog>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>)
  );
}
