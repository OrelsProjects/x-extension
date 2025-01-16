import React, { useState } from "react";
import "./style.css";
import { AnimatePresence, motion } from "framer-motion";
import Sidebar from "@/content/sidebar";

const Content: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [randomNumber, setRandomNumber] = useState<number | null>(null);

  const toggleSidebar = () => {
    if (!isOpen) {
      // Generate some random data each time we open
      const newRandomNumber = Math.floor(Math.random() * 1000);
      setRandomNumber(newRandomNumber);
    }
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="ext-orel-fixed ext-orel-top-5 ext-orel-right-5 ext-orel-z-50 ext-orel-bg-primary ext-orel-text-primary-foreground ext-orel-p-4 ext-orel-rounded-md ext-orel-cursor-pointer"
        onClick={toggleSidebar}
      >
        Toggle Sidebar abcdsd
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            key="sidebar"
            transition={{ duration: 0.3 }}
            className={` 
          ext-orel-fixed ext-orel-top-0 ext-orel-right-0 ext-orel-h-screen ext-orel-w-[calc(50vw-460px)] ext-orel-z-[999] ext-orel-bg-background ext-orel-text-foreground
          ${isOpen ? "ext-orel-translate-x-0" : ""}`}
          >
            <Sidebar onClose={handleClose} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Content;
