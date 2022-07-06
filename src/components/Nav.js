import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import download from "../images/download.png";
import file from "../images/files.png";
import left from "../images/left.png";
import right from "../images/right.png";
import forward from "../images/forward.png";
import view from "../images/view.png";
import previous from "../images/previous.png";
import tolq from "../images/tolq.png";

const Nav = () => {
  const count = useSelector((state) => state?.data);
  function WordCount(str) {
    return str && str?.trim()?.split(" ")?.length;
  }

  return (
    <div>
      <nav className="bg-white">
        <div>
          <div className=" sm:block sm:ml-6 ">
            <div className="flex">
              <div>
                <img className="w-20" src={tolq} alt="tolq" />
              </div>
              <div className="flex items-center">
                <div className="flex flex-col items-start ">
                  <a
                    href="#"
                    className=" text-black text-2xl ml-8  py-2 rounded-md text-sm font-medium"
                    aria-current="page"
                  >
                    markdown1.md
                  </a>
                  <a href="#" className="ml-8">
                    English-Spanish
                  </a>
                </div>
                <div className="text-start ml-16">
                  <p className="ml-1">Progress</p>
                  <p
                    style={{ width: `${WordCount(count?.bodyCount) }%`, maxWidth: "650px", minWidth:"60px" }}
                    className={`h-4 bg-green-300 text-center text-xs rounded-md`}
                    // style="75%"
                  >{`${WordCount(count?.bodyCount)} / ${WordCount(
                    count?.bodyCount
                  )} `}</p>
                  <p className="fixed ">
                  {WordCount(count?.bodyCount) > 1000 ? (
                    <p className="text-red-500 ml-1  text-xs">
                      You have crossed 1000 words
                    </p>
                   ) : <></>} 
                  </p>
                  
                </div>
              </div>
            </div>

            <div className="flex justify-between bg-gray-100 items-center ">
              <div className="flex ">
                <img
                  className="cursor-pointer m-4"
                  src={download}
                  alt="download"
                />
                <img
                  className="ml-8 cursor-pointer m-4"
                  src={file}
                  alt="file"
                />
                <img
                  className="ml-8 cursor-pointer m-4"
                  src={forward}
                  alt="forward"
                />
                <img
                  className="ml-8 cursor-pointer m-4"
                  src={left}
                  alt="larrow"
                />
                <img
                  className="ml-8 cursor-pointer m-4"
                  src={right}
                  alt="rarrow"
                />
                <img
                  className="ml-8 cursor-pointer m-4"
                  src={previous}
                  alt="right"
                />
                <img
                  className="ml-8 cursor-pointer m-4"
                  src={view}
                  alt="view"
                />
              </div>
              <div>
                <button
                  type="button"
                  className=" mr-4 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300"
                >
                  Confirm highlights
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
