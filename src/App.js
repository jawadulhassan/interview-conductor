import React, { useState } from "react";

import Info from "./components/Info";
import Report from "./components/Report";
import Interview from "./components/Interview";

function TabBodyContent({ selectedTab, setSelectedTab }) {
  switch (selectedTab) {
    case "info":
      return <Info setSelectedTab={setSelectedTab} />;
    case "interview":
      return <Interview setSelectedTab={setSelectedTab} />;
    case "report":
      return <Report setSelectedTab={setSelectedTab} />;
    default:
      return <Info />;
  }
}

function App() {
  const [selectedTab, setSelectedTab] = useState("info");
  return (
    <TabBodyContent selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
  );
}

export default App;
