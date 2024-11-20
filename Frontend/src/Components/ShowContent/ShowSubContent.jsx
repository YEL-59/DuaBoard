import React from "react";
import { useSelector } from "react-redux";

const ShowSubContent = () => {
  const subContent = useSelector((state) => state.subContent);

  if (!subContent) return <p>Select a sub-item to see details.</p>;

  return (
    <div className="p-4 border rounded-md bg-gray-50">
      <h3 className="text-lg font-bold mb-2">{subContent.subItemsTitle}</h3>
      <p className="text-sm text-gray-700 mb-2">{subContent.subItemsDetails}</p>
      <p className="text-sm font-semibold text-gray-600">
        Reference: {subContent.subItemsReference}
      </p>
    </div>
  );
};

export default ShowSubContent;
