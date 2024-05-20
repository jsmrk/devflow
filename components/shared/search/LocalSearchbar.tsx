"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

interface props {
  route: string;
  iconPosition: string;
  imgSrc: string;
  placeholder: string;
  otherClasses?: string;
}

function LocalSearchbar({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses,
}: props) {
  return (
    <div
      className={`${otherClasses} bg-card flex min-h-[56px] grow items-center gap-4 rounded-xl px-4`}
    >
      {iconPosition === "left" && (
        <Image
          src={imgSrc}
          alt='search'
          width={24}
          height={24}
          className='cursor-pointer'
        />
      )}
      <Input
        type='text'
        placeholder={placeholder}
        onChange={() => {
          route;
        }}
      />
    </div>
  );
}

export default LocalSearchbar;
