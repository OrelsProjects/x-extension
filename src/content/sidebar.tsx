import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  Settings,
  ChevronRight,
  Feather,
  BookHeart,
} from "lucide-react";
import {
  BarChart2,
  MinusSquare,
  MessageSquare,
  FileText,
  Mail,
  ChevronDown,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
  const pathname = useLocation().pathname;
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setSelectedItem(pathname);
  }, [pathname]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navItemClassname = (path: string) =>
    cn("w-5 h-5 text-ext-muted-foreground opacity-50 hover:opacity-100", {
      "text-ext-primary opacity-100": selectedItem === path,
    });

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            key="sidebar"
            transition={{ duration: 0.3 }}
            className={cn(
              "fixed top-5 right-5 z-50 bg-ext-primary text-ext-primary-foreground p-4 rounded-md cursor-pointer"
            )}
            onClick={toggleSidebar}
          >
            Toggle Sidebar abcdsd
          </motion.button>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            key="sidebar"
            transition={{ duration: 0.3 }}
            className={` 
          fixed top-0 right-0 h-screen w-[calc(50vw-460px)] z-[999] bg-ext-background text-ext-foreground
          ${isOpen ? "translate-x-0" : ""}`}
          >
            <div className="flex flex-col h-screen bg-black text-white border-l border-gray-800">
              {/* Top Search Bar */}
              <div className="flex items-center gap-2.5 px-3 py-2 border-b border-gray-800">
                <div className="flex items-center gap-2 flex-1 bg-gray-800 rounded-full px-3 py-2">
                  <Search className="w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent flex-1 text-gray-300 placeholder-gray-500 outline-none"
                  />
                </div>
                <div className="flex gap-2">
                  <Settings className="w-5 h-5 text-gray-400" />
                  <ChevronRight
                    onClick={toggleSidebar}
                    className="w-5 h-5 text-gray-400"
                  />
                </div>
              </div>

              {/* Navbar */}
              <header className="w-full flex justify-between items-center gap-4 px-3 py-2 border-b border-gray-800">
                <nav className="w-full">
                  <ul className="w-full flex flex-row justify-between items-center gap-4">
                    <Link to="/">
                      <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="Profile"
                        className="w-8 h-8 rounded-full"
                      />
                    </Link>
                    <Link to="/compose">
                      <Feather className={navItemClassname("/compose")} />
                    </Link>
                    <Link to="/activities">
                      <BarChart2 className={navItemClassname("/activities")} />
                    </Link>
                    <Link to="/tweets">
                      <MinusSquare className={navItemClassname("/tweets")} />
                    </Link>
                    <Link to="/timelines">
                      <MessageSquare
                        className={navItemClassname("/timelines")}
                      />
                    </Link>
                    <Link to="/replies">
                      <Mail className={navItemClassname("/replies")} />
                    </Link>
                    {/* interactions */}
                    <Link to="/interactions">
                      <FileText className={navItemClassname("/interactions")} />
                    </Link>
                    <Link to="/messages">
                      <MessageSquare
                        className={navItemClassname("/messages")}
                      />
                    </Link>
                  </ul>
                </nav>
                <button className="w-[95px] text-sm py-1 px-3 border rounded-lg flex flex-row items-center gap-2 dark:bg-slate-100/5 flex-shrink-0">
                  <span className="text-xs">30 days</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </header>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
