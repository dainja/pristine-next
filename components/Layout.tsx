import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { Footer } from "./Footer";
import { TextLogo } from "./Logo";
import { trackBookingButton } from "../src/gtag";

const navigation = [
  { name: "Tjänster", href: "/#tjanster" },
  { name: "Om Pristine", href: "/#om-pristine" },
  { name: "Kontakt", href: "/#kontakt" },
  { name: "Prislista", href: "/prislista" },
];

export const Layout: React.FC = ({ children }) => {
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
        <Popover as="header" className="fixed w-full z-50">
          <div className="bg-custom py-6">
            <nav
              className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
              aria-label="Global"
            >
              <div className="flex items-center flex-1">
                <div className="flex items-center justify-between w-full md:w-full">
                  <Link href="/#">
                    <a>
                      <span className="sr-only">Pristine</span>
                      <TextLogo className="md:w-36 w-24" />
                    </a>
                  </Link>
                  <div className="flex items-center md:hidden">
                    <a
                      href="https://www.bokadirekt.se/places/pristine-46831"
                      onClick={() => trackBookingButton("header")}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium text-white bg-tarawera hover:bg-gray-700 mr-4 rounded"
                    >
                      BOKA TID
                    </a>
                    <Popover.Button className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="hidden space-x-8 md:flex md:mx-10">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a className="text-base font-medium text-gray-700 hover:text-gray-500 whitespace-nowrap">
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hidden md:flex md:items-center md:space-x-6">
                <a
                  href="https://www.bokadirekt.se/places/pristine-46831"
                  onClick={() => trackBookingButton("header")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium text-white bg-tarawera hover:bg-gray-700 rounded"
                >
                  BOKA TID
                </a>
              </div>
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-20 top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
            >
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <Link href="/#">
                      <a>
                        <Popover.Button>
                          <span className="sr-only">Pristine</span>
                          <TextLogo className="md:w-36 w-24" />
                        </Popover.Button>
                      </a>
                    </Link>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="pt-5 pb-6">
                  <div className="px-2 space-y-1">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a className="block px-3 py-2 rounded-md text-gray-900 hover:bg-gray-50">
                          <Popover.Button className="block w-full text-base font-medium text-left">
                            {item.name}
                          </Popover.Button>
                        </a>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-6 px-5">
                    <a
                      href="https://www.bokadirekt.se/places/pristine-46831"
                      onClick={() => trackBookingButton("header")}
                      target="_blank"
                      rel="noreferrer"
                      className="block text-center w-full py-3 px-4  shadow bg-tarawera hover:bg-gray-700 text-white font-medium"
                    >
                      BOKA TID
                    </a>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
        <main className="mt-20">{children}</main>
        <Footer />
      </div>
    </div>
  );
};
