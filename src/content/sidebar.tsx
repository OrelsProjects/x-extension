import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  Settings,
  ChevronRight,
  Feather,
  ChevronDown,
  Mail,
  ChartColumnBig,
  Bird,
  SquareChartGantt,
  MessageSquareQuote,
  ThumbsUp,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavItem } from "./components/nav-item";
import { TooltipProvider } from "@/components/ui/tooltip";

const timeRanges = [
  { label: "Today", value: "today", shortcut: "⌘1" },
  { label: "Last 7 days", value: "7days", shortcut: "⌘2" },
  { label: "Last 14 days", value: "14days", shortcut: "⌘3" },
  { label: "Last 30 days", value: "30days", shortcut: "⌘4" },
  { label: "Last 60 days", value: "60days", shortcut: "⌘5" },
  { label: "Last 90 days", value: "90days", shortcut: "⌘6" },
  { label: "Last 180 days", value: "180days", shortcut: "⌘7" },
  { label: "All time", value: "all", shortcut: "⌘8" },
] as const;

export interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
  const pathname = useLocation().pathname;
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [timeRange, setTimeRange] = useState("30days");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setSelectedItem(pathname);
  }, [pathname]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navItemClassname = (path: string) =>
    cn(
      "ext-w-5 ext-h-5 ext-text-ext-muted-foreground ext-opacity-50 hover:ext-opacity-100",
      {
        "ext-text-ext-primary !ext-opacity-100": selectedItem === path,
      }
    );

  return (
    <TooltipProvider>
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            key="sidebar"
            transition={{ duration: 0.3 }}
            className={cn(
              "ext-fixed ext-top-5 ext-right-5 ext-z-40 ext-rounded-md ext-cursor-pointer"
            )}
          >
            <img
              onClick={toggleSidebar}
              src="https://apps-og-images.s3.us-east-1.amazonaws.com/128.png"
              alt="SuperX"
              className="ext-w-12 ext-h-12"
            />
          </motion.div>
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
              ext-fixed ext-top-0 ext-right-0 ext-h-screen ext-w-[calc(50vw-460px)] ext-z-[999] ext-bg-ext-background ext-text-ext-foreground
              ${isOpen ? "ext-translate-x-0" : ""}`}
          >
            <div className="ext-flex ext-flex-col ext-h-screen ext-bg-ext-background ext-text-white ext-border-l ext-border-ext-border">
              {/* Top Search Bar */}
              <div className="ext-flex ext-items-center ext-gap-2.5 ext-px-3 ext-py-2 ext-border-b ext-border-ext-border">
                <div className="ext-flex ext-items-center ext-gap-2 ext-flex-1 ext-bg-gray-800 ext-rounded-full ext-px-3 ext-py-2">
                  <Search className="ext-w-5 ext-h-5 ext-text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="ext-bg-transparent ext-flex-1 ext-text-gray-300 ext-placeholder-gray-500 ext-outline-none"
                  />
                </div>
                <div className="ext-flex ext-gap-2">
                  <Settings className="ext-w-5 ext-h-5 ext-text-gray-400" />
                  <ChevronRight
                    onClick={toggleSidebar}
                    className="ext-w-5 ext-h-5 ext-text-gray-400"
                  />
                </div>
              </div>

              {/* Navbar */}
              <header className="ext-w-full ext-flex ext-justify-between ext-items-center ext-gap-4 ext-px-3 ext-py-2 ext-border-b ext-border-ext-border">
                <nav className="ext-w-full">
                  <ul className="ext-w-full ext-flex ext-flex-row ext-justify-between ext-items-center ext-gap-4">
                    <Link to="/">
                      <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="Profile"
                        className="ext-w-8 ext-h-8 ext-rounded-full"
                      />
                    </Link>
                    <NavItem
                      to="/compose"
                      icon={Feather}
                      label="Compose"
                      isSelected={selectedItem === "/compose"}
                    />
                    <NavItem
                      to="/activities"
                      icon={ChartColumnBig}
                      label="Activities"
                      isSelected={selectedItem === "/activities"}
                    />
                    <NavItem
                      to="/tweets"
                      icon={Bird}
                      label="Tweets"
                      isSelected={selectedItem === "/tweets"}
                    />
                    <NavItem
                      to="/timelines"
                      icon={SquareChartGantt}
                      label="Timelines"
                      isSelected={selectedItem === "/timelines"}
                    />
                    <NavItem
                      to="/replies"
                      icon={MessageSquareQuote}
                      label="Replies"
                      isSelected={selectedItem === "/replies"}
                    />
                    <NavItem
                      to="/interactions"
                      icon={ThumbsUp}
                      label="Interactions"
                      isSelected={selectedItem === "/interactions"}
                    />
                    <NavItem
                      to="/messages"
                      icon={Mail}
                      label="Messages"
                      isSelected={selectedItem === "/messages"}
                    />
                  </ul>
                </nav>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="ext-w-[180px] ext-justify-between"
                    >
                      <span className="ext-text-ext-foreground">
                        {
                          timeRanges.find((range) => range.value === timeRange)
                            ?.label
                        }
                      </span>
                      <ChevronDown className="ext-h-4 ext-w-4 ext-opacity-50" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="ext-w-56 ext-border-ext-border">
                    <DropdownMenuLabel>Time Range</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      {timeRanges.map((range) => (
                        <DropdownMenuItem
                          key={range.value}
                          onClick={() => setTimeRange(range.value)}
                          className={cn(
                            "ext-transition-colors",
                            range.value === timeRange && "ext-text-ext-primary"
                          )}
                        >
                          <span>{range.label}</span>
                          <DropdownMenuShortcut>
                            {range.shortcut}
                          </DropdownMenuShortcut>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </header>
              <div className="ext-p-4 ext-h-full  ext-pb-24">{children}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </TooltipProvider>
  );
};

export default Sidebar;
