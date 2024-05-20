import { Input } from "@/components/ui/input";
import React from "react";

function GlobalSearch() {
  return (
    <div className='flex w-full gap-3 relative max-w-[600px] max-lg:hidden'>
      <Input placeholder='Search Anything Globally'></Input>
    </div>
  );
}

export default GlobalSearch;
