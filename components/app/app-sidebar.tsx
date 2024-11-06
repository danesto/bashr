"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import Link from "next/link";
import { usePathname } from "next/navigation";

type AppSidebarProps = {
  title: React.ReactNode;
  navItems: {
    title: string;
    items: {
      label: string;
      href: string;
      icon: React.ReactNode;
    }[];
  };
};

const AppSidebar = ({ navItems }: AppSidebarProps) => {
  const currentPage = usePathname();

  return (
    <Sidebar className="border-stone-800">
      <SidebarHeader className="pl-4 pt-4">
        <h1 className="font-semibold tracking-wider">BASHR</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{navItems.title}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.items.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton
                    size="lg"
                    asChild
                    isActive={item.href === currentPage}
                  >
                    <Link href={item.href} className="text-base">
                      {item.icon}
                      <span className="text-base">{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

              {/* <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/dashboard">
                    <span>Bashes</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem> */}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      {/* <SidebarRail className="rext-red-100 " /> */}
    </Sidebar>
  );
};

export { AppSidebar };
