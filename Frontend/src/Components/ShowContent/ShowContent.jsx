import React, { useEffect, useState } from "react";
import ShowSubContent from "./ShowSubContent";
import { useSelector } from "react-redux"; 


const ShowContent = () => {
  const [data, setData] = useState([]);
  const selectedItem = useSelector((state) => state.subContent.selectedItem);
  useEffect(() => {
    // Fetch the data from the API
    fetch("https://backend-ten-delta-66.vercel.app/api/dropdown")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching dropdown data:", error));
  }, []);

  console.log("api Data:", data);

  return (
    <>
      <div className="w-full sm-max:overflow-y-auto sm-max:pb-20 md-min:h-[calc(100vh-100px)]">
        <div className="flex mb-5 flex-row bg-white rounded-2lg px-5 py-4 justify-start items-center rounded-xl">
          <p className="text-sm font-normal">
            <span className="text-green-500 font-medium">Section: </span>
            {selectedItem
              ? selectedItem.subItemsTitle 
              : "Select an item to see details"}
          </p>
        </div>
      </div>

      <div className="flex flex-col h-[70vh]  overflow-y-auto">
        {/* Map through main items */}
        {data?.map((section) =>
          section.items.map((item) =>
            item.subItems.map((subItem) =>
              subItem.subItemsDetails.map((detail) => (
                <ShowSubContent key={detail.id} detail={detail} />
              ))
            )
          )
        )}
      </div>
    </>
  );
};

export default ShowContent;
