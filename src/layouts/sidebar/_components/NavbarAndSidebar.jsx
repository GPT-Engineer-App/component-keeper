import { Package2 } from "lucide-react";
import { NavLink } from "react-router-dom";
import { navItems } from "../../../nav-items";
import { SidebarNavLink } from "./SidebarNavLink";
import { Input } from "@/components/ui/input";

export const NavbarAndSidebar = () => (
  <div className="hidden border-r bg-muted/40 md:block">
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-6">
        <NavLink to="/" className="flex items-center gap-2 font-semibold">
          <Package2 className="h-6 w-6" />
          <span>WebComp Organizer</span>
        </NavLink>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <div className="px-4 py-2">
          <Input placeholder="Search..." className="w-full" />
        </div>
        <nav className="grid items-start px-4 text-sm font-medium">
          {navItems.map((item) => (
            <SidebarNavLink key={item.to} to={item.to}>
              {item.icon}
              {item.title}
            </SidebarNavLink>
          ))}
        </nav>
      </div>
    </div>
  </div>
);