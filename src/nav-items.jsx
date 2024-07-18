import { Home, FolderKanban, Component, Info } from "lucide-react";
import HomePage from "./pages/Home";
import CollectionsPage from "./pages/Collections";
import ComponentsPage from "./pages/Components";
import AboutPage from "./pages/About";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <HomePage />,
  },
  {
    title: "Collections",
    to: "/collections",
    icon: <FolderKanban className="h-4 w-4" />,
    page: <CollectionsPage />,
  },
  {
    title: "Components",
    to: "/components",
    icon: <Component className="h-4 w-4" />,
    page: <ComponentsPage />,
  },
  {
    title: "About",
    to: "/about",
    icon: <Info className="h-4 w-4" />,
    page: <AboutPage />,
  },
];