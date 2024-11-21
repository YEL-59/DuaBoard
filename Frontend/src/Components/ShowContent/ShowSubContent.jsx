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
      subItemRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
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
        <h2 className="font-normal text-md text-green-600">
          {detail.subItemsTitle}
        </h2>
      </div>
      <div>
        <p className="mb-5">{detail.subItemsDetails.textheader}</p>
        <p className=" text-lg leading-9  font-medium mb-5">{detail.subItemsDetails.text}</p>
        <p className="mb-8 text-lg font-medium ml-20">{detail.subItemsDetails.arabic}</p>

        
        <p className="mb-5 font-medium ">
          <strong>Transliteration:</strong>{" "}
          <span className="italic">{detail.subItemsDetails.transliteration}</span>
        </p>
        <p className="font-medium text-gray-400">
          <strong>Translation:</strong> {detail.subItemsDetails.translation}
        </p>
      </div>

      <p className="text-sm text-black mt-5 font-medium">
         <strong className="text-md text-green-500">Reference: </strong>{detail.subItemsReference}
      </p>

      <div className="flex justify-end gap-5">
        <div>
          <img src="https://duaruqyah.com/assets/others/copy.svg" alt="" />
        </div>
        <div>
          <img src="https://duaruqyah.com/assets/others/bookmark.svg" alt="" />
        </div>
        <div>
          <img src="https://duaruqyah.com/assets/others/plan.svg" alt="" />
        </div>
        <div>
          <img src="https://duaruqyah.com/assets/others/share.svg" alt="" />
        </div>
        <div>
          <img src="https://duaruqyah.com/assets/others/report.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ShowSubContent;
