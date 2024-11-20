import React from "react";
import { useSelector } from "react-redux";
import Categories from "../../Components/Categories/Categories";
import Setting from "../../Components/Setting/Setting";
import ShowContent from "../../Components/ShowContent/ShowContent";

const MainPage = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);

  return (
    <div className={`p-4 ${isSidebarOpen ? "sm:ml-64" : ""}`}>
      <div className="  rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 mb-4">
          <div className="col-span-12 sm:col-span-3">
            <Categories />
          </div>

          <div className="col-span-12 sm:col-span-6">
            <ShowContent />
          </div>

          <div className="col-span-12 sm:col-span-3">
            <Setting />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
