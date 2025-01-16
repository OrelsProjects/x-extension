import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownIcon } from "lucide-react";
import React, { useState } from "react";
import { AreaChart, Area, XAxis, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Sep 21", value: 30 },
  { name: "Oct 19", value: 45 },
  { name: "Nov 15", value: 25 },
  { name: "Dec 13", value: 60 },
  { name: "Jan 10", value: 40 },
];

const colors = {
  impressions: "#a3a3a3", // Light gray for neutrality
  earnings: "#16a34a", // Darker green for earnings
  likes: "#dc2626", // Darker red for likes
  retweets: "#2563eb", // Darker blue for retweets
  replies: "#7c3aed", // Rich purple for replies
  bookmarks: "#d97706", // Darker amber for bookmarks
};

const StatCard = ({
  title,
  value,
  change,
  changePositive,
  percentage,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: {
  title: string;
  value: string;
  change: string;
  changePositive: boolean;
  percentage: string;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) => {
  const cardColor = colors[title.toLowerCase() as keyof typeof colors];

  return (
    <div
      className="ext-bg-ext-card ext-p-4 ext-rounded-lg ext-transition-all duration-300"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <h3 className="ext-text-ext-muted-foreground ext-uppercase ext-text-sm ext-mb-2">
        {title}
      </h3>
      <div className="ext-flex ext-items-baseline ext-gap-2">
        <span
          className="ext-text-3xl ext-font-bold ext-text-ext-muted-foreground"
          style={{
            color: isHovered
              ? cardColor
              : "hsl(var(--muted-foreground-ext-orel))",
            transition: "color 0.3s ease",
          }}
        >
          {value}
        </span>
        <span
          className={cn(
            "ext-text-ext-destructive ext-text-sm ext-flex ext-items-center",
            changePositive ? "ext-text-[#16a34a]" : "ext-text-ext-destructive"
          )}
        >
          <ArrowDownIcon
            className={cn(
              "ext-h-3 ext-w-3",
              changePositive
                ? "ext-text-[#16a34a] ext-rotate-180"
                : "ext-text-ext-destructive"
            )}
          />
          {change}
        </span>
      </div>
      <div className="ext-mt-4 ext-h-24">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient
                id={`colorValue-${title}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor={
                    isHovered
                      ? cardColor
                      : "hsl(var(--muted-foreground-ext-orel))"
                  }
                  stopOpacity={0.1}
                />
                <stop
                  offset="95%"
                  stopColor={
                    isHovered
                      ? cardColor
                      : "hsl(var(--muted-foreground-ext-orel))"
                  }
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" hide={true} />
            <Area
              type="monotone"
              dataKey="value"
              stroke={
                isHovered ? cardColor : "hsl(var(--muted-foreground-ext-orel))"
              }
              strokeWidth={2}
              fillOpacity={1}
              fill={`url(#colorValue-${title})`}
              className="ext-transition-[stroke] ext-duration-300 ext-ease-in-out"
            />
          </AreaChart>
        </ResponsiveContainer>
        <AnimatePresence>
          {!isHovered && (
            <motion.div
              key="percentage"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={cn(
                "ext-relative ext-mt-2 opacity-50 ext-transition-opacity"
              )}
            >
              <span
                className={cn(
                  "ext-absolute ext-bottom-4 ext-right-4 ext-font-bold ext-text-ext-muted-foreground/60 ext-text-2xl ext-bg-transparent"
                )}
              >
                {percentage}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const FrequencyGrid = () => {
  const days = ["Sun", "Tue", "Thu", "Sat"];
  const months = ["Sep 21", "Oct 19", "Nov 15", "Dec 13", "Jan 10"];

  return (
    <div className="ext-bg-ext-card ext-p-4 ext-rounded-lg">
      <div className="ext-flex ext-justify-between ext-items-center ext-mb-4">
        <h3 className="ext-text-ext-muted-foreground ext-uppercase ext-text-sm">
          Frequency
        </h3>
        <span className="ext-text-ext-muted-foreground ext-text-sm">
          Max: 13, Min: 0, Avg: 2
        </span>
      </div>
      <div className="ext-grid ext-gap-2">
        {days.map((day) => (
          <div key={day} className="ext-flex ext-items-center ext-gap-2">
            <span className="ext-text-ext-muted-foreground ext-text-sm ext-w-8">
              {day}
            </span>
            <div className="ext-flex ext-gap-1">
              {Array(15)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className={`ext-w-4 ext-h-4 ext-rounded-sm ${
                      Math.random() > 0.7
                        ? "ext-bg-ext-primary"
                        : "ext-bg-ext-accent"
                    }`}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
      <div className="ext-flex ext-justify-between ext-mt-4">
        {months.map((month) => (
          <span
            key={month}
            className="ext-text-ext-muted-foreground ext-text-xs"
          >
            {month}
          </span>
        ))}
      </div>
    </div>
  );
};

const EngagementCard = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <>
      <div className="ext-grid ext-grid-cols-1 md:ext-grid-cols-2 ext-gap-4">
        <StatCard
          title="IMPRESSIONS"
          value="171k"
          change="-131k"
          changePositive={false}
          percentage="77%"
          isHovered={hovered === "impressions"}
          onMouseEnter={() => setHovered("impressions")}
          onMouseLeave={() => setHovered(null)}
        />
        <StatCard
          title="ESTIMATE EARNING"
          value="$2.1"
          change="$1.3"
          changePositive={true}
          percentage="5%"
          isHovered={hovered === "earnings"}
          onMouseEnter={() => setHovered("earnings")}
          onMouseLeave={() => setHovered(null)}
        />
      </div>

      <div className="ext-grid ext-grid-cols-2">
        <StatCard
          title="LIKES"
          value="2k"
          change="-1k"
          changePositive={false}
          percentage="77%"
          isHovered={hovered === "likes"}
          onMouseEnter={() => setHovered("likes")}
          onMouseLeave={() => setHovered(null)}
        />
        <StatCard
          title="RETWEETS"
          value="156"
          change="-138"
          changePositive={false}
          percentage="5%"
          isHovered={hovered === "retweets"}
          onMouseEnter={() => setHovered("retweets")}
          onMouseLeave={() => setHovered(null)}
        />
      </div>

      <div className="ext-grid ext-grid-cols-2 ext-gap-4">
        <StatCard
          title="REPLIES"
          value="142"
          change="+54"
          changePositive={true}
          percentage="5%"
          isHovered={hovered === "replies"}
          onMouseEnter={() => setHovered("replies")}
          onMouseLeave={() => setHovered(null)}
        />
        <StatCard
          title="BOOKMARKS"
          value="393"
          change="-371"
          changePositive={false}
          percentage="13%"
          isHovered={hovered === "bookmarks"}
          onMouseEnter={() => setHovered("bookmarks")}
          onMouseLeave={() => setHovered(null)}
        />
      </div>
    </>
  );
};

export default function Activities() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <ScrollArea className="ext-h-full ext-bg-ext-background ext-text-ext-foreground">
      <div className="ext-max-w-4xl ext-mx-auto ext-space-y-6">
        <FrequencyGrid />

        <div className="ext-text-2xl ext-font-bold ext-mb-4">ENGAGEMENT</div>
        <EngagementCard />
      </div>
    </ScrollArea>
  );
}
