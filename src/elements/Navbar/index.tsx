'use client';

import Link from 'next/link'
import Image from 'next/image';
import { useState } from 'react';
import { AlignJustify } from 'react-feather';

import Routers, { Route } from '../../config/router';

const Navbar = () => {
  const [hidden, setHidden] = useState("hidden");

  const handleHidden = () => {
    if(hidden === "hidden")  setHidden("");
    else setHidden("hidden");
  }

  return (
    <nav className="bg-black border-gray-200 px-2 sm:px-4 py-2.5">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" className="flex items-center">
            <Image className="h-9 w-9 mr-3 sm:h-12 sm:w-12" width={50} height={50} alt="logo-unBit" src="/img/Logo.png"/>
            <h1 className="text-white self-center text-xl font-semibold whitespace-nowrap dark:text-white">UnBit</h1>
        </Link>
        <button onClick={handleHidden} type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <AlignJustify width={40} height={40} className="text-white" />
        </button>
        <div className={`${hidden} w-full md:block md:w-auto`}>
          <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            {Routers.map((route: Route, key: number) => (
              <li key={key} className="hover:bg-primary py-2 px-2 rounded-xl">
                <Link onClick={handleHidden} href={route.href} className="block py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">{route.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
