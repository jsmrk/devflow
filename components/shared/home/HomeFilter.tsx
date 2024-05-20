"use client";

import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import React from "react";

const HomeFilter = () => {
  const active = "frequent";

  return (
    <div className='mt-10 flex-wrap gap-3 md:flex hidden'>
      {HomePageFilters.map((item) => (
        <Button
          key={item.value}
          onClick={() => {}}
          className={`px-6 py-3 capitalize text-xs text-tcolor ${
            active === item.value ? "bg-primary text-white" : "bg-gray"
          }`}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilter;
