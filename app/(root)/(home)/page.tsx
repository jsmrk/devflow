import Filter from "@/components/shared/Filter";
import HomeFilter from "@/components/shared/home/HomeFilter";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <div className='flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center'>
        <h1 className='text-3xl font-extrabold'>All Questions</h1>
        <Link href={"/ask-question"} className='flex justify-end max-sm:w-full'>
          <Button className='min-h-[46px] px-4 py-3'>Ask a Question</Button>
        </Link>
      </div>

      <div className='mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center'>
        <LocalSearchbar
          route={"/"}
          iconPosition={"left"}
          imgSrc={"/assets/icons/search.svg"}
          placeholder={"Search for questions"}
          otherClasses={"flex-1"}
        />
        <Filter
          filter={HomePageFilters}
          otherClasses={"sm:min-w-[170px]"}
          containerClasses={"max-md:hidden flex"}
        />
      </div>
      <HomeFilter />
    </>
  );
};

export default Home;
