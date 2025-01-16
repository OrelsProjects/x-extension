import { Settings } from "lucide-react";

export default function Compose() {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Custom timeline</h2>
        <Settings className="w-5 h-5 text-gray-400" />
      </div>
      <p className="text-gray-500 italic">No posts available</p>
    </div>
  );
}
