"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Follower {
  id: number;
  name: string;
  avatar: string;
  interactions: number;
}

const mockFollowers: Follower[] = [
  {
    id: 1,
    name: "Alex",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    interactions: 3,
  },
  {
    id: 2,
    name: "Sam",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    interactions: 2,
  },
  {
    id: 3,
    name: "Jordan",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    interactions: 1,
  },
  // Add more mock followers that will be blurred
  ...Array.from({ length: 20 }, (_, i) => ({
    id: i + 4,
    name: `User ${i + 4}`,
    avatar: "",
    interactions: Math.floor(Math.random() * 5) + 1,
  })),
];

export default function CasualFollowers() {
  return (
    <div className="ext-p-4 ext-bg-ext-background ext-text-ext-foreground ext-min-h-screen">
      <div className="ext-max-w-2xl ext-mx-auto">
        <div className="ext-flex ext-items-center ext-justify-between ext-mb-4">
          <h2 className="ext-text-xl ext-font-semibold">Casual followers</h2>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="ext-text-ext-muted-foreground hover:ext-text-ext-foreground"
              >
                Sort by Interactions{" "}
                <ChevronDown className="ext-ml-2 ext-h-4 ext-w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="ext-w-48">
              <DropdownMenuItem>Most interactions</DropdownMenuItem>
              <DropdownMenuItem>Least interactions</DropdownMenuItem>
              <DropdownMenuItem>Recent</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="ext-grid ext-grid-cols-6 ext-gap-4 md:ext-grid-cols-8">
          {mockFollowers.map((follower, index) => (
            <div
              key={follower.id}
              className={`ext-relative ${
                index > 2 ? "ext-filter ext-blur-sm" : ""
              }`}
            >
              <Avatar className="ext-h-12 ext-w-12 ext-border-2 ext-border-ext-border">
                <AvatarImage
                  src={follower.avatar}
                  alt={`${follower.name}'s avatar`}
                />
                <AvatarFallback>{follower.name[0]}</AvatarFallback>
              </Avatar>
              {follower.interactions > 0 && (
                <span className="ext-absolute -ext-top-1 -ext-right-1 ext-bg-blue-500 ext-text-ext-primary-foreground ext-text-xs ext-rounded-full ext-h-5 ext-w-5 ext-flex ext-items-center ext-justify-center">
                  {follower.interactions}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
