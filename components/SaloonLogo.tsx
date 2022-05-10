import React from "react";
import blurb from "../public/images/blurb4.jpg";
import Image from "next/image";

export function SaloonLogo() {
  return (
    <>
      {" "}
      <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
        <div className="relative flex py-5 items-center pb-20">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
      </div>
      <div className="relative bg-tarawera-600 sm:pt-16 sm:pb-16 lg:pt-16 lg:pb-0 py-8">
        <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
          <div className="relative overflow-hidden rounded ">
            <div className="lg:-top-16 relative">
              <Image
                alt=""
                src={blurb}
                layout="responsive"
                objectFit="cover"
                placeholder="blur"
                className="rounded shadow-xl ring-1 ring-black ring-opacity-5 saturate-50"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
