import React from "react";
import { useSelector } from "react-redux";

const MainPage = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);

  return (
    <div className={`p-4 ${isSidebarOpen ? "sm:ml-64" : ""}`}>
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
        <div className="grid grid-cols-3 gap-4 mb-4">Content goes here</div>
      </div>
    </div>
  );
};

export default MainPage;
