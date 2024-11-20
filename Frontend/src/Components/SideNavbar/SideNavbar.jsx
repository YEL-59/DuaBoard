import React from "react";
import { useSelector } from "react-redux";

const SideNavbar = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);

  return (
    <aside
      className={`border rounded-2xl bg-white fixed z-40 h-[55rem] top-10  transition-transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } sm:translate-x-0`}
    >
      <div className="h-full px-5 py-4 overflow-y-auto ">
        <div className="flex flex-col justify-between">
          <div>
            {" "}
            <a href="#" className="border flex items-center justify-center  text-gray-900 rounded-lg  hover:bg-gray-100 mb-24">
              <img
                src="https://duaruqyah.com/assets/dua-logo.svg"
                className="h-10 w-full "
                alt="Lgo"
              />
            </a>
          </div>
          <div>
            {" "}
            <ul className="space-y-5 font-medium">
              <li>
                <a
                  href="#"
                  className=" border flex items-center justify-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 "
                >
                  <img
                    src="https://duaruqyah.com/assets/nav/home.svg"
                    className="w-5 h-5 text-gray-500 transition duration-75 "
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" border flex items-center justify-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 "
                >
                  <img
                    src="https://duaruqyah.com/assets/nav/alldua.svg"
                    className="w-5 h-5 text-gray-500 transition duration-75 "
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" border flex items-center justify-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 "
                >
                  <img
                    src="https://duaruqyah.com/assets/nav/memorize.svg"
                    className="w-5 h-5 text-gray-500 transition duration-75 "
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" border flex items-center justify-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 "
                >
                  <img
                    src="https://duaruqyah.com/assets/nav/bookmark.svg"
                    className="w-5 h-5 text-gray-500 transition duration-75 "
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" border flex items-center justify-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 "
                >
                  <img
                    src="https://duaruqyah.com/assets/nav/ruqyah.svg"
                    className="w-5 h-5 text-gray-500 transition duration-75 "
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" border flex items-center justify-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 "
                >
                  <img
                    src="https://duaruqyah.com/assets/nav/dua-info.svg"
                    className="w-5 h-5 text-gray-500 transition duration-75 "
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" border flex items-center justify-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 "
                >
                  <img
                    src="https://duaruqyah.com/assets/nav/books.svg"
                    className="w-5 h-5 text-gray-500 transition duration-75 "
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <a
              href="#"
              className=" border flex items-center justify-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 mt-24"
            >
              <img
                src="https://duaruqyah.com/support"
                className="w-5 h-5 text-gray-500 transition duration-75 "
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideNavbar;
