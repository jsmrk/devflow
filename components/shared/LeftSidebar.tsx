"use client";

import { sidebarLinks } from "@/types/sidebar-links";
import { SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

function LeftSidebar() {
  const pathname = usePathname();

  return (
    <section className='sticky bg-card left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto p-6 pt-32 max-sm:hidden lg:w-[266px]'>
      <div className='flex h-full flex-col gap-3   '>
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname == item.route;

          return (
            <Link
              key={item.label}
              href={item.route}
              className={`${
                isActive ? "bg-primary" : "bg-transparent"
              } flex items-center justify-start gap-4  p-4 rounded-xl hover:bg-primary`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                height={20}
                width={20}
              />
              <p
                className={`${isActive ? "font-extrabold" : ""} max-lg:hidden`}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>{" "}
      <SignedOut>
        <div className='flex flex-col gap-3'>
          <Link href={"/sign-in"}>
            <Button className='w-full bg-gray max-lg:bg-transparent max-lg:p-0'>
              <Image
                src={"/assets/icons/account.svg"}
                alt={"Sign in"}
                width={20}
                height={20}
                className='lg:hidden'
              />
              <span className='max-lg:hidden'>Log In</span>
            </Button>
          </Link>
          <Link href={"/sign-up"}>
            <Button className='w-full bg-gray max-lg:bg-transparent max-lg:p-0'>
              <Image
                src={"/assets/icons/sign-up.svg"}
                alt={"Sign Up"}
                width={20}
                height={20}
                className='lg:hidden'
              />
              <span className='max-lg:hidden'>Sign Up</span>
            </Button>
          </Link>
        </div>
      </SignedOut>
    </section>
  );
}

export default LeftSidebar;
