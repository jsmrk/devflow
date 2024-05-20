"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface props {
  filter: {
    name: string;
    value: string;
  }[];
  otherClasses?: string;
  containerClasses?: string;
}

const Filter = ({ filter, otherClasses, containerClasses }: props) => {
  return (
    <div className={`relative ${containerClasses} `}>
      <Select>
        <SelectTrigger className={`${otherClasses}`}>
          <div className='line-clamp-1 flex-1 text-left'>
            <SelectValue placeholder='Select a Filter' />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {filter.map((item) => (
              <SelectItem key={item.name} value={item.value}>
                {item.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filter;
