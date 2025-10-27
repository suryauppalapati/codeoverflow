"use client";

import Image from "next/image";
import Link from "next/link";

import ThemeToggler from "./theme-toggler";

function Navbar() {
  return (
    <nav
      className={`
        flex-between background-light900_dark200 shadow-light-300 fixed z-50
        w-full gap-5 p-6
        sm:px-12
        dark:shadow-none
      `}
    >
      <Link href="/" className="flex items-center gap-2">
        <Image src="/images/site-logo.svg" alt="CodeOverflow Logo" height="24" width="24" />
        <p
          className={`
            h2-bold font-space-grotesk text-dark-100
            dark:text-light-900
            max-sm:hidden
          `}
        >
          Code<span className="text-primary-500">Overflow</span>
        </p>
      </Link>
      <p>Global Search</p>
      <ThemeToggler />
    </nav>
  );
}

export default Navbar;
