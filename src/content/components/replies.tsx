"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  MessageCircle,
  Repeat2,
  Heart,
  Bookmark,
  BarChart2,
} from "lucide-react";

interface Reply {
  id: number;
  author: {
    name: string;
    handle: string;
    avatar: string;
    verified?: boolean;
    badge?: string;
  };
  replyingTo: string;
  content: string;
  timeAgo: string;
  metrics: {
    replies: number;
    retweets: number;
    likes: number;
    bookmarks: number;
    analytics: number;
  };
}

const mockReplies: Reply[] = [
  {
    id: 1,
    author: {
      name: "Luca Restagno",
      handle: "ikoichi",
      avatar: "/placeholder.svg?height=48&width=48",
      badge: "shipped.club",
    },
    replyingTo: "@Orelzman",
    content: "there might be some knowlege gaps 🤔",
    timeAgo: "1d ago",
    metrics: {
      replies: 0,
      retweets: 0,
      likes: 1,
      bookmarks: 0,
      analytics: 0,
    },
  },
  {
    id: 2,
    author: {
      name: "Tibo",
      handle: "tibo_maker",
      avatar: "/placeholder.svg?height=48&width=48",
    },
    replyingTo: "@Orelzman",
    content: "awesome 🙏",
    timeAgo: "2d ago",
    metrics: {
      replies: 0,
      retweets: 0,
      likes: 0,
      bookmarks: 0,
      analytics: 0,
    },
  },
  {
    id: 3,
    author: {
      name: "Jake Doo ∞",
      handle: "On1Digital",
      avatar: "/placeholder.svg?height=48&width=48",
    },
    replyingTo: "@Orelzman",
    content: "badly!",
    timeAgo: "4d ago",
    metrics: {
      replies: 0,
      retweets: 0,
      likes: 0,
      bookmarks: 0,
      analytics: 0,
    },
  },
  {
    id: 4,
    author: {
      name: "Marcos F.",
      handle: "frangoaguiar",
      avatar: "/placeholder.svg?height=48&width=48",
    },
    replyingTo: "@Orelzman",
    content:
      "With me, it loss the context sometimes and I need to keep adding files, can't add a folder, and the generated response doesn't follow my file changes keeping the next generations outdated.",
    timeAgo: "6d ago",
    metrics: {
      replies: 0,
      retweets: 0,
      likes: 0,
      bookmarks: 0,
      analytics: 0,
    },
  },
];

function MetricButton({ icon: Icon, count }: { icon: any; count: number }) {
  return (
    <button className="ext-flex ext-items-center ext-gap-1 ext-text-gray-500 hover:ext-text-blue-500">
      <Icon className="ext-h-4 ext-w-4" />
      <span className="ext-text-sm">{count}</span>
    </button>
  );
}

export default function ReplyThread() {
  return (
    <div className="ext-min-h-screen ext-bg-ext-background ext-text-white ext-p-4">
      <div className="ext-max-w-2xl ext-mx-auto ext-space-y-4">
        <h2 className="ext-text-gray-400 ext-text-sm ext-font-medium">
          REPLY TO YOUR POSTS
        </h2>

        {mockReplies.map((reply) => (
          <div
            key={reply.id}
            className="ext-border-b ext-border-gray-800 ext-pb-4"
          >
            <div className="ext-flex ext-gap-3">
              <Avatar className="ext-h-12 ext-w-12">
                <AvatarImage
                  src={reply.author.avatar}
                  alt={reply.author.name}
                />
                <AvatarFallback>{reply.author.name[0]}</AvatarFallback>
              </Avatar>

              <div className="ext-flex-1">
                <div className="ext-flex ext-items-center ext-gap-1 ext-mb-0.5">
                  <span className="ext-font-bold">{reply.author.name}</span>
                  {reply.author.badge && (
                    <span className="ext-text-gray-400">
                      👾 {reply.author.badge}
                    </span>
                  )}
                  <span className="ext-text-gray-500">
                    @{reply.author.handle} · {reply.timeAgo}
                  </span>
                </div>

                <div className="ext-text-gray-400 ext-mb-1">
                  Replying to{" "}
                  <span className="ext-text-blue-500">{reply.replyingTo}</span>
                </div>

                <div className="ext-mb-3">{reply.content}</div>

                <div className="ext-flex ext-justify-between ext-max-w-md">
                  <MetricButton
                    icon={MessageCircle}
                    count={reply.metrics.replies}
                  />
                  <MetricButton icon={Repeat2} count={reply.metrics.retweets} />
                  <MetricButton icon={Heart} count={reply.metrics.likes} />
                  <MetricButton
                    icon={Bookmark}
                    count={reply.metrics.bookmarks}
                  />
                  <MetricButton
                    icon={BarChart2}
                    count={reply.metrics.analytics}
                  />
                </div>

                <button className="ext-text-gray-500 ext-text-sm ext-mt-2 hover:ext-text-blue-500">
                  Show conversation
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
