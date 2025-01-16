import { Search, Settings, ChevronRight } from "lucide-react";
import {
  BarChart2,
  MinusSquare,
  MessageSquare,
  FileText,
  Mail,
  ChevronDown,
} from "lucide-react";

export interface SidebarProps {
  onClose: () => void;
}

const Sidebar = ({ onClose }: SidebarProps) => {
  return (
    <div className="ext-orel-flex ext-orel-flex-col ext-orel-h-screen ext-orel-bg-black ext-orel-text-white">
      {/* Top Search Bar */}
      <div className="ext-orel-flex ext-orel-items-center ext-orel-gap-2 ext-orel-p-4 ext-orel-border-b ext-orel-border-gray-800">
        <Search className="ext-orel-w-5 ext-orel-h-5 ext-orel-text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="ext-orel-bg-transparent ext-orel-flex-1 ext-orel-text-gray-300 ext-orel-placeholder-gray-500 ext-orel-outline-none"
        />
        <div className="ext-orel-flex ext-orel-gap-2">
          <Settings className="ext-orel-w-5 ext-orel-h-5 ext-orel-text-gray-400" />
          <ChevronRight
            onClick={onClose}
            className="ext-orel-w-5 ext-orel-h-5 ext-orel-text-gray-400"
          />
        </div>
      </div>

      {/* User Profile */}
      <div className="ext-orel-w-full ext-orel-flex ext-orel-justify-between ext-orel-items-center ext-orel-gap-4 ext-orel-p-4">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Profile"
          className="ext-orel-w-8 ext-orel-h-8 ext-orel-rounded-full"
        />
        <div className="ext-orel-w-full ext-orel-flex ext-orel-justify-between ext-orel-items-center ext-orel-gap-2">
          <FileText className="ext-orel-w-5 ext-orel-h-5 ext-orel-text-gray-400" />
          <BarChart2 className="ext-orel-w-5 ext-orel-h-5 ext-orel-text-gray-400" />
          <MinusSquare className="ext-orel-w-5 ext-orel-h-5 ext-orel-text-gray-400" />
          <MessageSquare className="ext-orel-w-5 ext-orel-h-5 ext-orel-text-orange-400" />
          <FileText className="ext-orel-w-5 ext-orel-h-5 ext-orel-text-gray-400" />
          <Mail className="ext-orel-w-5 ext-orel-h-5 ext-orel-text-gray-400" />
        </div>
        <button className="w-[95px] text-sm py-1 px-3 border rounded-lg flex flex-row items-center gap-2 dark:bg-slate-100/5">
          <span>30 days</span>
          <ChevronDown className="ext-orel-w-4 ext-orel-h-4" />
        </button>
      </div>

      {/* Timeline Section */}
      <div className="ext-orel-p-4">
        <div className="ext-orel-flex ext-orel-justify-between ext-orel-items-center ext-orel-mb-4">
          <h2 className="ext-orel-text-xl ext-orel-font-semibold">
            Custom timeline
          </h2>
          <Settings className="ext-orel-w-5 ext-orel-h-5 ext-orel-text-gray-400" />
        </div>
        <p className="ext-orel-text-gray-500 ext-orel-italic">
          No posts available
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
