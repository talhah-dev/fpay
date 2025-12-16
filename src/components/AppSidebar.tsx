"use client"

import * as React from "react"
import {
    IconChartBar,
    IconDashboard,
    IconFolder,
    IconHelp,
    IconInnerShadowTop,
    IconSearch,
    IconSettings,
    IconUsers,
} from "@tabler/icons-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { NavMain } from "./NavMain"
import { NavUser } from "./NavUser"
import { NavSecondary } from "./NavSecondary"
import { History } from "lucide-react"

const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
        {
            title: "Dashboard",
            url: "/platform",
            icon: IconDashboard,
        },
        {
            title: "Projects",
            url: "/platform/project",
            icon: IconFolder,
        },
        {
            title: "Team",
            url: "/platform/team",
            icon: IconUsers,
        },
        {
            title: "Analytics",
            url: "/platform/analytics",
            icon: IconChartBar,
        },
        {
            title: "History",
            url: "/platform/history",
            icon: History,
        },
    ],
    navSecondary: [
        {
            title: "Settings",
            url: "/platform/settings",
            icon: IconSettings,
        },
        {
            title: "Get Help",
            url: "/platform/help",
            icon: IconHelp,
        },
        {
            title: "Search",
            url: "/platform/search",
            icon: IconSearch,
        },
    ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="offcanvas" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            className="data-[slot=sidebar-menu-button]:!p-1.5"
                        >
                            <a href="#">
                                <IconInnerShadowTop className="!size-5" />
                                <span className="text-base font-semibold">Acme Inc.</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
                <NavSecondary items={data.navSecondary} className="mt-auto" />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
        </Sidebar>
    )
}
