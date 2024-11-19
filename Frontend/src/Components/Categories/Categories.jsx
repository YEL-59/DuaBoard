import React from "react";
import DropdownComponent from "../DropdownComponent/DropdownComponent";

const Categories = () => {
  return (
    <>
      <div className="w-full max-w-xl  bg-white border border-gray-200 rounded-lg shadow ">
        <h5 className="mb-3 p-2 text-base font-semibold bg-[#1FA45B] text-white text-center  rounded-t-lg  border-b-2 w-full md:text-xl dark:text-white">
          Categories
        </h5>

        <div>
          <form className="max-w-md mx-auto p-3">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 ">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Search Categories"
                required
              />
            </div>
          </form>
        </div>

        <div className="p-3">
          <DropdownComponent/>
                  
        </div>
      </div>
    </>
  );
};

export default Categories;
