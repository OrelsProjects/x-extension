import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface NavItemProps {
  to: string;
  icon: LucideIcon;
  label: string;
  isSelected: boolean;
}

export function NavItem({ to, icon: Icon, label, isSelected }: NavItemProps) {
  const navItemClassname = cn(
    "ext-w-5 ext-h-5 ext-text-ext-muted-foreground ext-opacity-50 hover:ext-opacity-100",
    {
      "ext-text-ext-primary !ext-opacity-100": isSelected,
    }
  );

  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <Link to={to}>
            <Icon className={navItemClassname} />
          </Link>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="ext-z-[999999]">
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
