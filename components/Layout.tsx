// components/Layout.tsx

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { Footer } from "./Footer";
import { TextLogo } from "./Logo";
import { trackBookingButton } from "../src/gtag";
import ActiveLink from "./ActiveLink";

const navigation = [
  { name: "Hem", href: "/" },
  { name: "Om Linné", href: "/om-linne" },
  // Dolda tills vidare
  // { name: "Kontakt", href: "/kontakt" },
  // { name: "Prislista", href: "/prislista" },
];

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="bg-custom1">
      <div className="relative overflow-hidden flex flex-col min-h-screen justify-between">
        <Popover as="header" className="fixed w-full z-50">
          <div className="bg-custom py-6">
            <nav
              className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
              aria-label="Global"
            >
              <div className="flex items-center flex-1">
                <div className="flex items-center justify-between w-full md:w-full">
                  <Link href="/" aria-label="Salong Linné">
                    <TextLogo className="md:w-36 w-24" />
                  </Link>
                  <div className="flex items-center md:hidden">
                    <a
                      href="https://www.bokadirekt.se/places/salong-linne-46831"
                      onClick={() => trackBookingButton("header")}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-bold text-white bg-tarawera hover:bg-gray-700 mr-4 rounded shadow-md"
                    >
                      BOKA TID
                    </a>
                    <Popover.Button className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="hidden space-x-4 md:flex md:mx-10 items-center">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a className="text-base font-medium text-gray-700 hover:text-white hover:bg-tarawera whitespace-nowrap inline-flex items-center px-4 py-2 border border-gray-200 rounded-md transition-all duration-200 hover:border-tarawera">
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hidden md:flex md:items-center md:space-x-6">
                <a
                  href="https://www.bokadirekt.se/places/salong-linne-46831"
                  onClick={() => trackBookingButton("header")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-bold text-white bg-tarawera hover:bg-gray-700 rounded shadow-md"
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
                    <Link href="/" aria-label="Salong Linné">
                      <TextLogo className="md:w-36 w-24" />
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
                  <div className="px-5 space-y-2">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a
                          className="block px-4 py-3 rounded-md text-gray-900 hover:bg-gray-100 text-base font-medium text-center border border-gray-200"
                          onClick={() => {
                            // Close the popover when a navigation item is clicked
                            const popoverButton = document.querySelector(
                              "[data-headlessui-state]"
                            ) as HTMLButtonElement;
                            if (popoverButton) popoverButton.click();
                          }}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-6 px-5">
                    <a
                      href="https://www.bokadirekt.se/places/salong-linne-46831"
                      onClick={() => trackBookingButton("header")}
                      target="_blank"
                      rel="noreferrer"
                      className="block text-center w-full py-4 px-4 rounded-md shadow-lg bg-tarawera hover:bg-tarawera-700 text-white font-bold uppercase tracking-wider transition-colors duration-200"
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
