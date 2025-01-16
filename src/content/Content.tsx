import React, { useState } from "react";
import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Compose from "@/content/components/compose";
import Layout from "@/content/layout";
import Activities from "@/content/components/activities";
import Tweets from "@/content/components/tweets";
import Replies from "@/content/components/replies";
import Timelines from "@/content/components/timelines";
import Messages from "@/content/components/messages";
import Interactions from "@/content/components/interactions";

const Content: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Wrap all nested routes with the Layout */}
        <Route path="/" element={<Layout />}>
          <Route path="compose" element={<Compose />} />
          <Route path="activities" element={<Activities />} />
          <Route path="tweets" element={<Tweets />} />
          <Route path="timelines" element={<Timelines />} />
          <Route path="replies" element={<Replies />} />
          <Route path="interactions" element={<Interactions />} />
          <Route path="messages" element={<Messages />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Content;
