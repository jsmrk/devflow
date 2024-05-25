import QuestionCard from "@/components/shared/cards/QuestionCard";
import Filter from "@/components/shared/Filter";
import HomeFilter from "@/components/home/HomeFilter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import { IQuestions } from "@/types/questions";
import Link from "next/link";
import React from "react";

const questions: IQuestions[] = [
  {
    _id: 1,
    title: "Cascading Deletes in SQAlchemy",
    tags: [
      { _id: 1, name: "python" },
      { _id: 2, name: "sql" },
    ],
    author: { _id: 1, name: "John Doe", picture: "john-doe.png" },
    upvotes: 10,
    views: 100,
    answers: [],
    createAt: new Date("2024-03-01T12:00:00.000Z"),
  },
  {
    _id: 2,
    title: "How to center a div?",
    tags: [
      { _id: 1, name: "css" },
      { _id: 2, name: "html" },
    ],
    author: { _id: 1, name: "John Doe", picture: "john-doe.png" },
    upvotes: 15,
    views: 1325,
    answers: [],
    createAt: new Date("2024-05-01T12:00:00.000Z"),
  },
];

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

      <div className='mt-10 flex w-full flex-col gap-6'>
        {questions.length > 0 ? (
          questions.map((item) => (
            <QuestionCard
              key={item._id}
              _id={item._id}
              title={item.title}
              tags={item.tags}
              author={item.author}
              upvotes={item.upvotes}
              views={item.views}
              answers={item.answers}
              createAt={item.createAt}
            />
          ))
        ) : (
          <NoResult
            title={"Theres no question to show"}
            description={"Ask a question right away and be the first!"}
            link={"/"}
            linkTitle={"Ask Question Now"}
          />
        )}
      </div>
    </>
  );
};

export default Home;
