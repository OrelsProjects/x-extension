import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  Search,
  Settings,
  Share2,
  Repeat2,
  MessageCircle,
  Heart,
  BookmarkPlus,
} from "lucide-react";

interface Tweet {
  id: number;
  date: string;
  content: string;
  impressions: string;
  replies: number;
  retweets: number;
  quotes: number;
  likes: number;
  bookmarks: number;
}

const tweets: Tweet[] = [
  {
    id: 1,
    date: "2d ago",
    content: "First pivot of my life...",
    impressions: "164",
    replies: 5,
    retweets: 0,
    quotes: 3,
    likes: 0,
    bookmarks: 0,
  },
  {
    id: 2,
    date: "3d ago",
    content: "I made a Chrome exte...",
    impressions: "190",
    replies: 4,
    retweets: 0,
    quotes: 0,
    likes: 0,
    bookmarks: 0,
  },
  {
    id: 3,
    date: "3d ago",
    content: "Well, Cursor suggeste...",
    impressions: "247",
    replies: 6,
    retweets: 0,
    quotes: 1,
    likes: 0,
    bookmarks: 0,
  },
  {
    id: 4,
    date: "4d ago",
    content: "Got my first Google im...",
    impressions: "70",
    replies: 1,
    retweets: 0,
    quotes: 0,
    likes: 0,
    bookmarks: 0,
  },
  {
    id: 5,
    date: "4d ago",
    content: "I recently stumbled int...",
    impressions: "45",
    replies: 2,
    retweets: 0,
    quotes: 0,
    likes: 0,
    bookmarks: 0,
  },
  {
    id: 6,
    date: "4d ago",
    content: "How do you market yo...",
    impressions: "382",
    replies: 0,
    retweets: 0,
    quotes: 3,
    likes: 0,
    bookmarks: 0,
  },
  {
    id: 7,
    date: "4d ago",
    content: "🔴 StripeProtect is live...",
    impressions: "99",
    replies: 5,
    retweets: 0,
    quotes: 1,
    likes: 0,
    bookmarks: 0,
  },
  {
    id: 8,
    date: "5d ago",
    content: "You can now choose w...",
    impressions: "53",
    replies: 1,
    retweets: 0,
    quotes: 0,
    likes: 0,
    bookmarks: 0,
  },
  {
    id: 9,
    date: "5d ago",
    content: "Working on SEO for str...",
    impressions: "73",
    replies: 3,
    retweets: 0,
    quotes: 0,
    likes: 0,
    bookmarks: 0,
  },
  {
    id: 10,
    date: "5d ago",
    content: "🔴 StripeProtect is live...",
    impressions: "84",
    replies: 2,
    retweets: 0,
    quotes: 0,
    likes: 0,
    bookmarks: 0,
  },
  {
    id: 11,
    date: "01-09",
    content: "Watch out. Cursor eng...",
    impressions: "10k",
    replies: 205,
    retweets: 15,
    quotes: 56,
    likes: 8,
    bookmarks: 0,
  },
  {
    id: 12,
    date: "01-09",
    content: "Just finished setting u...",
    impressions: "122",
    replies: 2,
    retweets: 0,
    quotes: 0,
    likes: 0,
    bookmarks: 0,
  },
  {
    id: 13,
    date: "01-08",
    content: "Which version of the la...",
    impressions: "4k",
    replies: 7,
    retweets: 0,
    quotes: 13,
    likes: 0,
    bookmarks: 0,
  },
  {
    id: 14,
    date: "01-07",
    content: "I asked someone to se...",
    impressions: "84",
    replies: 3,
    retweets: 0,
    quotes: 0,
    likes: 0,
    bookmarks: 0,
  },
  {
    id: 15,
    date: "01-06",
    content: "I have been using Curs...",
    impressions: "1k",
    replies: 12,
    retweets: 0,
    quotes: 6,
    likes: 2,
    bookmarks: 0,
  },
  {
    id: 16,
    date: "01-04",
    content: "Finished building a Stri...",
    impressions: "269",
    replies: 6,
    retweets: 0,
    quotes: 1,
    likes: 0,
    bookmarks: 0,
  },
  {
    id: 17,
    date: "12-31",
    content: "How many times does ...",
    impressions: "102",
    replies: 1,
    retweets: 0,
    quotes: 1,
    likes: 0,
    bookmarks: 0,
  },
  {
    id: 18,
    date: "12-30",
    content: "2024 as an entreprene...",
    impressions: "2k",
    replies: 25,
    retweets: 0,
    quotes: 8,
    likes: 0,
    bookmarks: 0,
  },
  {
    id: 19,
    date: "12-29",
    content: "Fulltime entrepreneurs...",
    impressions: "115",
    replies: 0,
    retweets: 0,
    quotes: 0,
    likes: 0,
    bookmarks: 0,
  },
  {
    id: 20,
    date: "12-24",
    content: "New feature for shadc...",
    impressions: "373",
    replies: 3,
    retweets: 1,
    quotes: 1,
    likes: 2,
    bookmarks: 0,
  },
];

function App() {
  return (
    <div className="ext-min-h-screen ext-bg-ext-background ext-text-white">
      <div className="ext-max-w-4xl ext-mx-auto">
        {/* Header */}
        <div className="ext-flex ext-items-center ext-justify-between ext-p-4 ext-border-b ext-border-ext-border">
          <div className="ext-flex ext-items-center ext-gap-4">
            <div className="ext-flex ext-gap-2">
              <button className="ext-p-2 hover:ext-bg-gray-800 ext-rounded-full">
                <ArrowLeft className="ext-w-5 ext-h-5" />
              </button>
              <button className="ext-p-2 hover:ext-bg-gray-800 ext-rounded-full">
                <ArrowRight className="ext-w-5 ext-h-5" />
              </button>
            </div>
            <button className="ext-p-2 hover:ext-bg-gray-800 ext-rounded-full">
              <Search className="ext-w-5 ext-h-5" />
            </button>
          </div>
          <button className="ext-p-2 hover:ext-bg-gray-800 ext-rounded-full">
            <Settings className="ext-w-5 ext-h-5" />
          </button>
        </div>

        {/* Navigation */}
        <div className="ext-flex ext-border-b ext-border-ext-border">
          <button className="ext-px-4 ext-py-3 ext-text-sm ext-font-medium hover:ext-bg-gray-900 ext-relative">
            TWEETS
            <div className="ext-absolute ext-bottom-0 ext-left-0 ext-right-0 ext-h-1 ext-bg-blue-500"></div>
          </button>
          <button className="ext-px-4 ext-py-3 ext-text-sm ext-font-medium ext-text-gray-500 hover:ext-bg-gray-900">
            REPLIES
          </button>
          <button className="ext-px-4 ext-py-3 ext-text-sm ext-font-medium ext-text-gray-500 hover:ext-bg-gray-900">
            RETWEETS
          </button>
        </div>

        {/* Table */}
        <div className="ext-overflow-x-auto">
          <table className="ext-w-full">
            <thead>
              <tr className="ext-text-left ext-text-sm ext-text-gray-500 ext-border-b ext-border-ext-border">
                <th className="ext-p-4 ext-font-medium">Time</th>
                <th className="ext-p-4 ext-font-medium">Content</th>
                <th className="ext-p-4 ext-font-medium ext-text-right">
                  <Share2 className="ext-w-4 ext-h-4 ext-inline-block" />
                </th>
                <th className="ext-p-4 ext-font-medium ext-text-right">
                  <MessageCircle className="ext-w-4 ext-h-4 ext-inline-block" />
                </th>
                <th className="ext-p-4 ext-font-medium ext-text-right">
                  <Repeat2 className="ext-w-4 ext-h-4 ext-inline-block" />
                </th>
                <th className="ext-p-4 ext-font-medium ext-text-right">
                  <Heart className="ext-w-4 ext-h-4 ext-inline-block" />
                </th>
                <th className="ext-p-4 ext-font-medium ext-text-right">
                  <BookmarkPlus className="ext-w-4 ext-h-4 ext-inline-block" />
                </th>
              </tr>
            </thead>
            <tbody>
              {tweets.map((tweet) => (
                <tr
                  key={tweet.id}
                  className="ext-border-b ext-border-ext-border hover:ext-bg-gray-900"
                >
                  <td className="ext-p-4 ext-text-sm ext-text-gray-500">
                    {tweet.date}
                  </td>
                  <td className="ext-p-4 ext-text-sm">{tweet.content}</td>
                  <td className="ext-p-4 ext-text-sm ext-text-orange-500 ext-text-right">
                    {tweet.impressions}
                  </td>
                  <td className="ext-p-4 ext-text-sm ext-text-red-500 ext-text-right">
                    {tweet.replies}
                  </td>
                  <td className="ext-p-4 ext-text-sm ext-text-green-500 ext-text-right">
                    {tweet.retweets}
                  </td>
                  <td className="ext-p-4 ext-text-sm ext-text-blue-500 ext-text-right">
                    {tweet.quotes}
                  </td>
                  <td className="ext-p-4 ext-text-sm ext-text-purple-500 ext-text-right">
                    {tweet.bookmarks}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
