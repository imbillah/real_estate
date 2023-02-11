import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between p-4 bg-gray-200 text-gray-700">
        <Link href="/" passHref>
          <h1 className="text-2xl font-semibold ">RentVista</h1>
        </Link>

        <div>
          <ul className="flex  items-center">
            <Link href="/search" passHref>
              <li className="text-[20px] flex items-center ">
                <GoSearch />
              </li>
            </Link>
            <Link href="/search?purpose=for-rent" passHref>
              <li className="ml-4 text-[17px] ">RENT</li>
            </Link>
            <Link href="/search?purpose=for-sale" passHref>
              <li className="ml-4 text-[17px]">BUY</li>
            </Link>
          </ul>
        </div>
      </nav>
      <hr />
    </>
  );
};

export default Navbar;
