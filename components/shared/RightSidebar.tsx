import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";

function RightSidebar() {
  const hotQuestions = [
    {
      _id: 1,
      title:
        "Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?",
    },
    {
      _id: 2,
      title: "Is it only me or the font is bolder than necessary?",
    },
    {
      _id: 3,
      title: "Redux Toolkit Not Updating State as Expected",
    },
    {
      _id: 4,
      title: "Can I get the course for free?",
    },
    {
      _id: 5,
      title: "Async/Await Function Not Handling Errors Properly",
    },
  ];

  const popularTags = [
    { _id: 1, name: "javasript", totalQuestion: 5 },
    { _id: 2, name: "react", totalQuestion: 55 },
    { _id: 3, name: "typescript", totalQuestion: 15 },
    { _id: 4, name: "vue", totalQuestion: 65 },
    { _id: 5, name: "nextjs", totalQuestion: 25 },
  ];

  return (
    <section className='sticky bg-card right-0 top-0 flex h-screen flex-col justify-between overflow-y-auto p-6 pt-36 max-sm:hidden w-[350px]'>
      <div>
        <h3 className='text-xl font-extrabold'>Top Questions</h3>
        <div className='mt-7 flex w-full flex-col gap-3'>
          {hotQuestions.map((item) => {
            return (
              <Link
                key={item._id}
                href={`/questions/${item._id}`}
                className='flex cursor-pointer item-center justify-between gap-7 hover:bg-primary rounded-xl p-3'
              >
                <p className='text-sm'>{item.title}</p>
                <Image
                  src={"/assets/icons/chevron-right.svg"}
                  alt='arrow'
                  height={20}
                  width={20}
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div>
        <h3 className='text-xl font-extrabold'>Popular Tags</h3>
        <div className='mt-7 flex flex-col gap-4'>
          {popularTags.map((item) => {
            return (
              <RenderTag
                key={item._id}
                _id={item._id}
                name={item.name}
                totalQuestion={item.totalQuestion}
                showCount
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default RightSidebar;
