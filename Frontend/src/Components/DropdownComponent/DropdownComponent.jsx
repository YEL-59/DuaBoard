import React, { useEffect, useState } from "react";

const DropdownComponent = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownData, setDropdownData] = useState([]);
    const [activeItem, setActiveItem] = useState(null);
  
    const handleToggle = () => setDropdownOpen(!isDropdownOpen);
  
    const handleItemClick = (itemId) => {
      setActiveItem((prevItem) => (prevItem === itemId ? null : itemId));
    };
  
    useEffect(() => {
      fetch("http://localhost:5000/api/dropdown")
        .then((response) => response.json())
        .then((data) => setDropdownData(data.items))
        .catch((error) => console.error("Error fetching dropdown data:", error));
    }, []);

  return (
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
              {}
            </p>
            <p className="text-xs text-gray-500 truncate">Subcategory: 77</p>
          </div>
          <div>
            <div className="flex flex-col items-center">
              <p className="text-md font-medium text-gray-900 truncate">21</p>
              <p className="text-xs text-gray-500 truncate">Duas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown */}
      {isDropdownOpen && (
        <div className="absolute left-0 mt-2 bg-white rounded-lg shadow-lg flex w-full">
          {/* <div className="relative border-l-2 border-dotted border-gray-300">
            <div className="absolute top-2 left-[-6px] w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="absolute top-[60px] left-[-6px] w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="absolute top-[100px] left-[-6px] w-3 h-3 bg-green-500 rounded-full"></div>
          </div> */}

          {/* Dropdown Items */}
          <ul className="py-2 px-4 space-y-6">
          {dropdownData.map((item) => (
              <li key={item.id} className="flex items-center flex-col">
                <p
                  className="text-sm text-gray-700 hover:bg-gray-100 rounded cursor-pointer"
                  onClick={() => handleItemClick(item.id)}
                >
                  {item.name}
                </p>
                {activeItem === item.id && (
                  <ul className="ml-6 mt-2 bg-gray-100 rounded p-2">
                    {item.subItems.map((subItem) => (
                      <li
                        key={subItem.id}
                        className="text-sm text-gray-700 hover:bg-gray-200 rounded p-1"
                      >
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
  );
};

export default DropdownComponent;
