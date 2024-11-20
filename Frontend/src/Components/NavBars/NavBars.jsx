import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../store/sidebarSlice";

const Navbars = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-10  flex justify-between items-center p-2">
      <h1 className="text-xl lg:text-2xl font-bold text-gray-800">Dua Page</h1>
      <div className="flex items-center gap-5 lg:gap-28">
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
        <div>
          {" "}
          <div className="relative inline-block text-left">
          
            <button
              id="avatarButton"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 rounded-full cursor-pointer"
            >
              <img
                src="https://duaruqyah.com/assets/icon/duar_gurutto.svg"
                alt="User dropdown"
                className="rounded-full"
              />
            </button>

       
            {isOpen && (
              <div
                id="userDropdown"
                className="z-10 absolute right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
              >
                <ul
                  className="py-2 p-2 text-sm text-gray-700  "
                  aria-labelledby="avatarButton"
                >
                  <li>
                    <a
                      href="#"
                      className="flex gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg "
                    >
                      <img src="https://duaruqyah.com/assets/settings/support.svg" alt="" />
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg "
                    >
                      <img src="https://duaruqyah.com/assets/settings/support.svg" alt="" />
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg "
                    >
                      <img src="https://duaruqyah.com/assets/settings/support.svg" alt="" />
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg "
                    >
                      <img src="https://duaruqyah.com/assets/settings/support.svg" alt="" />
                      Dashboard
                    </a>
                  </li>

                
                </ul>
                
              </div>
            )}
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={() => dispatch(toggleSidebar())}
        className="sm:hidden inline-flex items-center p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Navbars;
