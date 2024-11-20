import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSubContent } from "../../store/subContentSlice";

const ShowSubContent = ({ detail }) => {
  const dispatch = useDispatch();
  const selectedItem = useSelector((state) => state.subContent.selectedItem);

  // Handle the click event to select the sub-item
  const handleClick = () => {
    dispatch(setSubContent(detail));
  };

  // Conditional styling based on selection
  const isSelected = selectedItem?.id === detail.id;

  const subItemRef = React.useRef(null);

  // Scroll into view when the item is selected
  React.useEffect(() => {
    if (isSelected && subItemRef.current) {
      subItemRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [isSelected]);

  return (
    <div
      ref={subItemRef} // Attach the ref to this item
      className={`border p-4 rounded-lg mb-4 cursor-pointer ${
        isSelected ? "bg-gray-200" : "bg-white"
      }`}
      onClick={handleClick}
    >
          <div className="flex gap-5 mb-4">
              <img src="https://duaruqyah.com/assets/duacard.svg" alt="" />
              <h2 className="font-normal text-md text-green-600">{detail.subItemsTitle}</h2>

      </div>
     
      <p>{detail.subItemsDetails}</p>
          <p className="text-sm text-gray-500 mt-5">Reference: {detail.subItemsReference}</p>
          
          <div className="flex justify-end gap-5">
              <div><img src="https://duaruqyah.com/assets/others/copy.svg" alt="" /></div>
              <div><img src="https://duaruqyah.com/assets/others/bookmark.svg" alt="" /></div>
              <div><img src="https://duaruqyah.com/assets/others/plan.svg" alt="" /></div>
              <div><img src="https://duaruqyah.com/assets/others/share.svg" alt="" /></div>
              <div><img src="https://duaruqyah.com/assets/others/report.svg" alt="" /></div>
              
          </div>
    </div>
  );
};

export default ShowSubContent;
