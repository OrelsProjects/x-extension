import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "ext-flex ext-cursor-default ext-gap-2 ext-select-none ext-items-center ext-rounded-sm ext-px-2 ext-py-1.5 ext-text-sm ext-outline-none focus:ext-bg-ext-accent data-[state=open]:ext-bg-ext-accent [&_svg]:ext-pointer-events-none [&_svg]:ext-size-4 [&_svg]:ext-shrink-0",
      inset && "ext-pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ext-ml-auto" />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "ext-z-[999999] ext-min-w-[8rem] ext-overflow-hidden ext-rounded-md ext-border ext-bg-ext-popover ext-p-1 ext-text-ext-popover-foreground ext-shadow-lg data-[state=open]:ext-animate-in data-[state=closed]:ext-animate-out data-[state=closed]:ext-fade-out-0 data-[state=open]:ext-fade-in-0 data-[state=closed]:ext-zoom-out-95 data-[state=open]:ext-zoom-in-95 data-[side=bottom]:ext-slide-in-from-top-2 data-[side=left]:ext-slide-in-from-right-2 data-[side=right]:ext-slide-in-from-left-2 data-[side=top]:ext-slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
));
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "ext-z-[999999] ext-min-w-[8rem] ext-overflow-hidden ext-rounded-md ext-border ext-bg-ext-card ext-p-1 ext-text-ext-card-foreground ext-shadow-md",
        "data-[state=open]:ext-animate-in data-[state=closed]:ext-animate-out data-[state=closed]:ext-fade-out-0 data-[state=open]:ext-fade-in-0 data-[state=closed]:ext-zoom-out-95 data-[state=open]:ext-zoom-in-95 data-[side=bottom]:ext-slide-in-from-top-2 data-[side=left]:ext-slide-in-from-right-2 data-[side=right]:ext-slide-in-from-left-2 data-[side=top]:ext-slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "ext-relative ext-flex ext-cursor-default ext-select-none ext-items-center ext-gap-2 ext-rounded-sm ext-px-2 ext-py-1.5 ext-text-sm ext-outline-none ext-transition-colors focus:ext-bg-ext-accent focus:ext-text-ext-accent-foreground data-[disabled]:ext-pointer-events-none data-[disabled]:ext-opacity-50 [&>svg]:ext-size-4 [&>svg]:ext-shrink-0",
      inset && "ext-pl-8",
      className
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "ext-relative ext-flex ext-cursor-default ext-select-none ext-items-center ext-rounded-sm ext-py-1.5 ext-pl-8 ext-pr-2 ext-text-sm ext-outline-none ext-transition-colors focus:ext-bg-accent focus:ext-text-accent-foreground data-[disabled]:ext-pointer-events-none data-[disabled]:ext-opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="ext-absolute ext-left-2 ext-flex ext-h-3.5 ext-w-3.5 ext-items-center ext-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="ext-h-4 ext-w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "ext-relative ext-flex ext-cursor-default ext-select-none ext-items-center ext-rounded-sm ext-py-1.5 ext-pl-8 ext-pr-2 ext-text-sm ext-outline-none ext-transition-colors focus:ext-bg-accent focus:ext-text-accent-foreground data-[disabled]:ext-pointer-events-none data-[disabled]:ext-opacity-50",
      className
    )}
    {...props}
  >
    <span className="ext-absolute ext-left-2 ext-flex ext-h-3.5 ext-w-3.5 ext-items-center ext-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="ext-h-2 ext-w-2 ext-fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "ext-px-2 ext-py-1.5 ext-text-sm ext-font-semibold",
      inset && "ext-pl-8",
      className
    )}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("ext--mx-1 ext-my-1 ext-h-px ext-bg-muted", className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ext-ml-auto ext-text-xs ext-tracking-widest ext-opacity-60",
        className
      )}
      {...props}
    />
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
