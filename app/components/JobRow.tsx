import React from "react";
import Googlelogo from "../../public/googlelog.png";
import Image from "next/image";

const JobRow = () => {
  return (
    <div className="group  mt-10 grid  grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-4 text-gray-700 shadow transition hover:shadow-lg mx-2 sm:mx-auto bg-white grow">
      <a
        href="#"
        className="order-2 col-span-1 mt-4 -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4"
      >
        <div className="group relative h-16 w-16 overflow-hidden rounded-lg">
          <Image
            src="/googlelogo.png"
            width={500}
            height={500}
            alt="company logo"
            className="h-full w-full object-cover text-gray-700"
          />
        </div>
      </a>
      <div className="col-span-11 flex flex-col pr-0 sm:pr-8 text-left pl-0 sm:pl-4 grow">
        <h3 className="text-sm text-gray-600">Spotify</h3>
        <div className="likepost self-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-heart cursor-pointer"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
          </svg>
        </div>
        <a
          href="#"
          className="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl"
        >
          {" "}
          Sr. Frontend Engineer{" "}
        </a>
        <p className="overflow-hidden pr-7 text-sm">
          Description of the job here
        </p>

        <div className="mt-5 flex flex-col flex-grow space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 space-x-0 sm:space-x-2">
          <div className="flex-grow flex-row">
            <div className="flex items-center mt-3 sm:mt-0">
              <span className="mr-0 sm:mr-3 rounded-md sm:rounded-full bg-blue-100 px-2 py-0.5 text-blue-800 w-full sm:w-fit">
                Remote · Kathmandu,Nepal · Full Time
              </span>
            </div>
          </div>
          <div className="self-end">
            <div className="text-right">2 weeks ago</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobRow;
