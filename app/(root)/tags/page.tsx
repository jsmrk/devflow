import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { TagFilters } from "@/constants/filters";
import { getAllTags } from "@/lib/actions/tag.action";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const result = await getAllTags({});

  return (
    <div>
      <h1 className='text-3xl font-extrabold'>All Tags</h1>

      <div className='mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center'>
        <LocalSearchbar
          route={"/tags"}
          iconPosition={"left"}
          imgSrc={"/assets/icons/search.svg"}
          placeholder={"Search for tags that has been question"}
          otherClasses={"flex-1"}
        />
        <Filter
          filter={TagFilters}
          otherClasses={"sm:min-w-[170px]"}
          containerClasses={"max-md:hidden flex"}
        />
      </div>

      <section className='mt-12 flex flex-wrap gap-4'>
        {result.tags.length > 0 ? (
          result.tags.map((item) => (
            <Link key={item._id} href={`/tags/${item._id}`}>
              <article className='bg-gray flex w-full flex-col rounded-3xl px-8 py-10 sm:w-[260px] items-center'>
                <p className='font-bold text-xl capitalize'>{item.name}</p>
                <span className='text-primary mt-3'>
                  {item.questions.length}+ Questions
                </span>
              </article>
            </Link>
          ))
        ) : (
          <NoResult
            title={"No Tags Found"}
            description={"It looks like ther is no Tag yet"}
            link={"/ask-question"}
            linkTitle={"Ask A Question"}
          />
        )}
      </section>
    </div>
  );
};

export default Page;
