import { RefreshCcw } from "lucide-react";
import React, { useEffect, useState } from "react";

interface Step {
  id: number;
  title: string;
  description?: string;
}

export default function Compose() {
  const [showRefresh, setShowRefresh] = useState(false);

  // SHow refresh for 1.5 seconds
  useEffect(() => {
    setShowRefresh(true);
    setTimeout(() => {
      setShowRefresh(false);
    }, 1500);
  }, []);

  const steps: Step[] = [
    {
      id: 1,
      title: "Authorize SuperX",
      description: "SuperX need to re-authorize to post on your behalf",
    },
    {
      id: 2,
      title: "Migrate existing posts",
    },
  ];

  return showRefresh ? (
    // flip the icon before the animation starts
    <RefreshCcw className="animate-spin-reverse" />
  ) : (
    <div className="ext-bg-[#121212] ext-p-4 ext-rounded-lg ext-text-white">
      <div className="ext-flex ext-items-center ext-gap-2 ext-mb-4">
        <span className="ext-text-[#FF9500]">✨</span>
        <span className="ext-text-white">Composer has been upgraded</span>
      </div>

      <div className="ext-space-y-4">
        {steps.map((step) => (
          <div key={step.id} className="ext-flex ext-gap-4">
            <div className="ext-flex ext-items-center ext-justify-center ext-w-6 ext-h-6 ext-rounded-full ext-bg-[#333333] ext-text-sm">
              {step.id}
            </div>
            <div className="ext-flex-1">
              <h3 className="ext-text-white ext-mb-2">{step.title}</h3>
              {step.description && (
                <div className="ext-bg-[#1E1E1E] ext-rounded-lg ext-p-4">
                  <p className="ext-text-gray-300 ext-mb-3">
                    {step.description}
                  </p>
                  <button className="ext-bg-[#0095F6] ext-text-white ext-px-4 ext-py-2 ext-rounded-lg ext-flex ext-items-center ext-gap-2">
                    Authorize
                    <span className="ext-ml-1">→</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
