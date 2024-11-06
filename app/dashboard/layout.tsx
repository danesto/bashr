import { AppSidebar } from "@/components/app/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { HomeIcon, CrumpledPaperIcon, PlusIcon } from "@radix-ui/react-icons";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-0 dark">
      <SidebarProvider>
        <AppSidebar
          title="bashr"
          navItems={{
            title: "Dashboard",
            items: [
              { label: "Home", href: "/dashboard", icon: <HomeIcon /> },
              {
                label: "Bashes",
                href: "/dashboard/bashes",
                icon: <CrumpledPaperIcon />,
              },

              {
                label: "Create",
                href: "/dashboard/create",
                icon: <PlusIcon />,
              },
            ],
          }}
        />
        <main>
          <SidebarTrigger className="dark:text-stone-50" />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
}
