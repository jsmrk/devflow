import AnswerForm from "@/components/Forms/AnswerForm";
import AllAnswers from "@/components/shared/AllAnswers";
import Metrics from "@/components/shared/Metrics";
import ParseHtml from "@/components/shared/ParseHtml";
import RenderTag from "@/components/shared/RenderTag";
import { getQuestionById } from "@/lib/actions/question.action";
import { getUserById } from "@/lib/actions/user.action";
import { getTimeStamp } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = async ({ params, searchParams }: any) => {
  const result = await getQuestionById({ questionId: params.id });
  const { userId: clerkId } = auth();

  let mongoUser;
  if (clerkId) {
    mongoUser = await getUserById({ userId: clerkId });
  }

  return (
    <>
      <div className='flex justify-start w-full flex-col'>
        <div className='flex w-full justify-between gap-4 sm:flex-row sm:items-center sm:gap-2'>
          <Link
            href={`/profile/${result.author[0].clerkId}`}
            className='flex gap-3 items-center justify-start'
          >
            <Image
              src={result.author[0].picture}
              alt='author picture'
              height={23}
              width={23}
              className='rounded-full'
            />
            <p>{result.author[0].name}</p>
          </Link>
          <div className='flex justify-end'>Voting</div>
        </div>
        <h2 className='text-3xl font-extrabold mt-3'>{result.title}</h2>
      </div>
      <div className='flex flex-wrap gap-5 mt-5'>
        <Metrics
          imgUrl='/assets/icons/clock.svg'
          alt='clock icon'
          value={`asked ${getTimeStamp(result.createdAt)}`}
          title='Votes'
          textStyle='text-xs'
        />
        <Metrics
          imgUrl='/assets/icons/like.svg'
          alt='upvotes'
          value={result.upvotes}
          title='Votes'
          textStyle='text-xs'
        />
        <Metrics
          imgUrl='/assets/icons/message.svg'
          alt='message'
          value={result.answers.length}
          title='Answers'
          textStyle='text-xs'
        />
        <Metrics
          imgUrl='/assets/icons/eye.svg'
          alt='views'
          value={result.views}
          title='Views'
          textStyle='text-xs'
        />
      </div>

      <div className='mt-5'>
        <ParseHtml data={result.content} />
      </div>

      <div className='flex mt-5 gap-3 mb-5'>
        {result.tags.map((item: any) => (
          <RenderTag key={item._id} _id={item._id} name={item.name} />
        ))}
      </div>

      <AllAnswers
        questionId={result._id}
        userId={JSON.stringify(mongoUser._id)}
        totalAnswers={result.answers.length}
      />

      <AnswerForm
        question={result.content}
        questionId={JSON.stringify(result._id)}
        authorId={JSON.stringify(mongoUser._id)}
      />
    </>
  );
};

export default Page;
