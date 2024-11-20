import React from "react";
import { useState } from "react";

const SingleDropdown = ({ data }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleToggle = () => setDropdownOpen(!isDropdownOpen);
  const handleItemClick = (itemId) => {
    setActiveItem((prevItem) => (prevItem === itemId ? null : itemId));
  };
  return (
    <>
      <div className="relative">
        {/* Main Clickable Div */}
        <div
          className="bg-[#E8F0F5] py-5 rounded-lg p-2 cursor-pointer"
          onClick={handleToggle}
        >
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-white w-14 h-auto rounded-md p-2">
              <img
                className="w-14 h-10 rounded-full"
                src="https://duaruqyah.com/assets/icon/duar_gurutto.svg"
                alt="img"
              />
            </div>
            <div className="flex-1 min-w-0 ms-4">
              <p className="text-md font-medium text-gray-900 truncate">
                {data.mainTitle}
              </p>
              <p className="text-xs text-gray-500 truncate">
                Subcategory: {data.items.length}
              </p>
            </div>
            <div>
              <div className="flex flex-col items-center">
                <p className="text-md font-medium text-gray-900 truncate">
                  {data.items.reduce(
                    (acc, item) => acc + item.subItems.length,
                    0
                  )}
                </p>
                <p className="text-xs text-gray-500 truncate">Duas</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dropdown */}
        {isDropdownOpen && (
          <div className=" left-0 mt-2 bg-white rounded-lg shadow-lg flex w-full ">
            <ul className="py-2 px-4 space-y-6">
              {data.items.map((item) => (
                <li key={item.id} className="w-772  flex items-start flex-col border-dashed border-l-2">
                  <p
                    className="text-sm text-gray-700 hover:bg-gray-100 rounded cursor-pointer px-3 text-start   "
                    onClick={() => handleItemClick(item.id)}
                  >
                    {item.name}
                  </p>
                  {activeItem === item.id && (
                    <ul className="ml-6 mt-2  rounded p-2">
                      {item.subItems.map((subItem) => (
                        <li
                          key={subItem.id}
                          className="text-xs text-gray-700 hover:bg-gray-200 rounded p-1 mb-2"
                        >
                          <img
                            src="https://duaruqyah.com/assets/duaarrow.svg"
                            className="inline me-2"
                            alt=""
                          />
                          {subItem.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default SingleDropdown;
