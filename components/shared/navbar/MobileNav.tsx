"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/types/sidebar-links";
import { SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavContent = () => {
  const pathname = usePathname();

  return (
    <section className='flex h-full flex-col gap-3'>
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname == item.route;

        return (
          <SheetClose asChild key={item.route}>
            <Link
              href={item.route}
              className={`${
                isActive ? "bg-primary" : "bg-transparent"
              } flex items-center justify-start gap-4 p-4 rounded-xl`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                height={20}
                width={20}
              />
              <p className={`${isActive ? "font-extrabold" : ""}`}>
                {item.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src={"/assets/icons/hamburger.svg"}
          alt={"menu"}
          width={36}
          height={36}
          className='sm:hidden hover:cursor-pointer text-primary'
        />
      </SheetTrigger>
      <SheetContent side={"left"} className='flex flex-col justify-between'>
        <Link href={"/"} className='flex items-center gap-3'>
          <Image
            src='/assets/images/site-logo.svg'
            width={23}
            height={23}
            alt='DevFlow'
          />
          <p className='text-5xl font-bold'>
            Dev<span className='text-primary'>Flow</span>
          </p>
        </Link>
        <div>
          <SheetClose asChild>
            <NavContent />
          </SheetClose>
        </div>{" "}
        <SignedOut>
          <div className='flex flex-col gap-3'>
            <SheetClose>
              <Link href={"/sign-in"}>
                <Button className='text-primary w-full bg-secondary'>
                  Log In
                </Button>
              </Link>
            </SheetClose>
            <SheetClose>
              <Link href={"/sign-up"}>
                <Button className='text-primary  w-full bg-secondary'>
                  Sign Up
                </Button>
              </Link>
            </SheetClose>
          </div>
        </SignedOut>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
