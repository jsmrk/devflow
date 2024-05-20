import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";

interface tags {
  _id: number;
  name: string;
  totalQuestion: number;
  showCount?: boolean;
}

function RenderTag({ _id, name, totalQuestion, showCount }: tags) {
  return (
    <Link
      href={`/tags/${_id}`}
      className='flex items-center justify-between gap-2 '
    >
      <Badge
        variant={"outline"}
        className='px-4 py-2 uppercase  hover:bg-primary'
      >
        {name}
      </Badge>
      {showCount && <p className='text-sm'>{totalQuestion}</p>}
    </Link>
  );
}

export default RenderTag;
