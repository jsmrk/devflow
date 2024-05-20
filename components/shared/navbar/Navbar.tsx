import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ThemeToggle } from "./theme-toggle";
import MobileNav from "./MobileNav";
import GlobalSearch from "../search/GlobalSearch";

function Navbar() {
  return (
    <nav className='flex bg-card justify-between items-center fixed z-50 w-full gap-5 p-6 sm:px-12'>
      <Link href={"/"} className='flex items-center gap-3'>
        <Image
          src='/assets/images/site-logo.svg'
          width={23}
          height={23}
          alt='DevFlow'
        />
        <p className='text-3xl font-bold max-sm:hidden'>
          Dev<span className='text-primary'>Flow</span>
        </p>
      </Link>
      <GlobalSearch />
      <div className='flex flex-between gap-5'>
        <ThemeToggle />
        <SignedIn>
          <UserButton
            afterSignOutUrl='/'
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
              variables: {
                colorPrimary: "#ff7000",
              },
            }}
          />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
}

export default Navbar;
