import { Outlet } from "react-router-dom";
import { MobileSidebar } from "./_components/MobileSidebar";
import { NavbarAndSidebar } from "./_components/NavbarAndSidebar";
import { UserMenu } from "../navbar/_components/UserMenu";
import { Package2 } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Input } from "@/components/ui/input";

const Layout = () => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[280px_1fr]">
      <NavbarAndSidebar />
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
          <MobileSidebar />
          <div className="flex flex-1 items-center justify-between">
            <nav className="flex items-center space-x-4">
              <NavLink to="/" className="flex items-center space-x-2">
                <Package2 className="h-6 w-6" />
                <span className="font-bold">WebComp Organizer</span>
              </NavLink>
            </nav>
            <UserMenu />
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
        <footer className="border-t py-4 text-center text-sm text-muted-foreground">
          © 2024 WebComp Organizer. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Layout;