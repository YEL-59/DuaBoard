import React from "react";
import ShowSubContent from "./ShowSubContent";

const ShowContent = () => {
  return (
    <>
      <div
        className="w-full sm-max:overflow-y-auto  sm-max:pb-20
        md-min:h-[calc(100vh-100px)] "
      >
        <div
          
          className="flex undefined mb-5 flex-row bg-white rounded-2lg px-5 py-4 justify-start items-center rounded-xl"
        >
          <p className="text-title font-medium  ">
            <span className="text-green-500  font-medium  ">
              Section:{" "}
            </span>
            The servant is dependent on his Lord
          </p>
        </div>
      </div>

    
        <div
          
          className="flex undefined mb-5 flex-row bg-white rounded-2lg px-5 py-4 justify-start items-center rounded-xl"
        >
          <ShowSubContent/>
        </div>
      

    </>
  );
};

export default ShowContent;
