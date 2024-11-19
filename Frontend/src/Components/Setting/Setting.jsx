import React from "react";

const Setting = () => {
  return (
    <>
      <div className="w-full max-w-xl  bg-white border border-gray-200 rounded-lg shadow ">
        <h5 className=" p-5 text-lg font-normal  text-gray-600 text-center  rounded-t-lg   w-full  ">
          Settings
        </h5>

        <div className="p-3">
          <a
            href="#"
            className="flex items-center p-3 text-base font-normal text-gray-500 rounded-lg bg-[#F7F8FA] hover:bg-gray-100 group hover:shadow "
          >
            <div className="h-10 w-10 rounded-full bg-[#E8F0F5] flex items-center justify-center">
              <img
                src="https://duaruqyah.com/assets/sidebar/language.svg"
                alt=""
              />
            </div>
            <span className=" text-gray-400 flex-1 ms-3 whitespace-nowrap">
              Language Setting
            </span>
          </a>
          <a
            href="#"
            className="flex items-center p-3 text-base font-normal text-gray-500 rounded-lg bg-[#F7F8FA] hover:bg-gray-100 group hover:shadow mt-3"
          >
            <div className="h-10 w-10 rounded-full bg-[#E8F0F5] flex items-center justify-center">
              <img
                src="https://duaruqyah.com/assets/sidebar/general.svg"
                alt=""
              />
            </div>
            <span className=" text-gray-400 flex-1 ms-3 whitespace-nowrap">
              General Settings
            </span>
          </a>
          <a
            href="#"
            className="flex items-center p-3 text-base font-normal text-gray-500 rounded-lg bg-[#F7F8FA] hover:bg-gray-100 group hover:shadow mt-3 mb-3"
          >
            <div className="h-10 w-10 rounded-full bg-[#E8F0F5] flex items-center justify-center">
              <img src="https://duaruqyah.com/assets/sidebar/font.svg" alt="" />
            </div>
            <span className=" text-gray-400 flex-1 ms-3 whitespace-nowrap">
              Font Settings
            </span>
          </a>
          <a
            href="#"
            className=" flex items-center p-3 text-base font-normal text-gray-500 rounded-lg bg-[#F7F8FA] hover:bg-gray-100 group hover:shadow "
          >
            <div className="h-10 w-10 rounded-full bg-[#E8F0F5] flex items-center justify-center">
              <img src="https://duaruqyah.com/assets/sidebar/font.svg" alt="" />
            </div>
            <span className=" text-gray-400 flex-1 ms-3 whitespace-nowrap">
              Appearance Settings
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Setting;
