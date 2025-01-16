import { Settings, RotateCcw, StickyNote } from "lucide-react";

interface Message {
  id: number;
  name: string;
  username: string;
  avatar: string;
  verified: boolean;
  time: string;
  preview: string;
  bio?: string;
}

const messages: Message[] = [
  {
    id: 1,
    name: "Message requests",
    username: "",
    avatar: "",
    verified: false,
    time: "",
    preview: "2 people you might know",
    bio: "",
  },
  {
    id: 2,
    name: "Tibo",
    username: "@tibo_maker",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    verified: true,
    time: "22h",
    preview: "You: Let me make it easier for you to choose: l...",
    bio: "Built Tweet Hunter, Taplio (sold $8m) Growing",
  },
  {
    id: 3,
    name: "Yossi Segev",
    username: "@HeyImYossi",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    verified: false,
    time: "1d",
    preview: "You: Do people see the video?",
  },
  {
    id: 4,
    name: "Cory Zue",
    username: "@czue",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    verified: false,
    time: "2d",
    preview: "Cory: wild",
  },
  {
    id: 4,
    name: "Creatr",
    username: "@getcreatr",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    verified: false,
    time: "3d",
    preview: "Creatr: Heyy thanks, you should get the access...",
  },
];

function App() {
  return (
    <div className="ext-min-h-screen ext-bg-ext-background ext-text-ext-foreground">
      <div className="ext-max-w-xl ext-mx-auto ext-border-x ext-border-ext-border ext-min-h-screen">
        {/* Header */}
        <div className="ext-flex ext-items-center ext-justify-between ext-p-4 ext-border-b ext-border-ext-border">
          <div className="ext-flex ext-items-center ext-gap-4">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop"
              alt="Profile"
              className="ext-w-8 ext-h-8 ext-rounded-full"
            />
            <h1 className="ext-text-xl ext-font-bold">Messages</h1>
          </div>
          <div className="ext-flex ext-items-center ext-gap-4">
            <Settings className="ext-w-5 ext-h-5" />
            <RotateCcw className="ext-w-5 ext-h-5" />
          </div>
        </div>

        {/* Search */}
        <div className="ext-p-2">
          <div className="ext-relative">
            <input
              type="text"
              placeholder="Search inbox"
              className="ext-w-full ext-bg-ext-foreground/0 ext-border ext-border-ext-border ext-rounded-full ext-py-2 ext-px-4 focus:ext-outline-none focus:ext-ring-1 focus:ext-ring-ext-border"
            />
          </div>
        </div>

        {/* Messages List */}
        <div className="ext-divide-y ext-divide-ext-border">
          {messages.map((message) => (
            <div
              key={message.id}
              className="ext-flex ext-items-start ext-gap-3 ext-p-4 hover:ext-bg-ext-foreground/5 ext-cursor-pointer"
            >
              {message.avatar ? (
                <img
                  src={message.avatar}
                  alt={message.name}
                  className="ext-w-10 ext-h-10 ext-rounded-full"
                />
              ) : (
                <div className="ext-w-10 ext-h-10 ext-rounded-full ext-bg-ext-accent/0 ext-border ext-border-ext-border ext-flex ext-items-center ext-justify-center">
                  <StickyNote className="ext-w-5 ext-h-5" />
                </div>
              )}
              <div className="ext-flex-1 ext-min-w-0">
                <div className="ext-flex ext-items-center ext-gap-2">
                  <div className="ext-flex ext-items-center ext-gap-1 ext-flex-1">
                    <span className="ext-font-bold ext-truncate">
                      {message.name}
                    </span>
                    {message.verified && (
                      <span className="ext-text-ext-primary">✓</span>
                    )}
                  </div>
                  {message.username && (
                    <span className="ext-text-ext-muted-foreground ext-text-sm">
                      {message.username}
                    </span>
                  )}
                  {message.time && (
                    <span className="ext-text-ext-muted-foreground ext-text-sm">
                      · {message.time}
                    </span>
                  )}
                </div>
                <p className="ext-text-ext-muted-foreground ext-truncate">
                  {message.preview}
                </p>
                {message.bio && (
                  <p className="ext-text-ext-muted-foreground ext-text-sm ext-truncate">
                    {message.bio}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
