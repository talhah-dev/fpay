import { AppSidebar } from '@/components/AppSidebar';
import { DashboardHeader } from '@/components/DashboardHeader';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import React from 'react'

interface Props {
    children: React.ReactNode;
    className?: string;
}

export default function layout({ children }: Props) {
    return (
        <>
            <SidebarProvider
                style={
                    {
                        "--sidebar-width": "calc(var(--spacing) * 72)",
                        "--header-height": "calc(var(--spacing) * 12)",
                    } as React.CSSProperties
                }
            >
                <AppSidebar variant="inset" />
                <SidebarInset>
                    <DashboardHeader />
                    {children}
                </SidebarInset>
            </SidebarProvider>
        </>
    )
}
