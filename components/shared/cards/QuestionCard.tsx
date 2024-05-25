import { IQuestions } from "@/types/questions";
import Link from "next/link";
import React from "react";
import RenderTag from "../RenderTag";
import Metrics from "../Metrics";
import { getTimeStamp } from "@/lib/utils";

const QuestionCard = (questions: IQuestions) => {
  return (
    <div className='rounded-xl p-9 sm:px-11'>
      <div className='flex flex-col-reverse items-start justify-between sm:flex-row'>
        <div>
          <span className='text-xs text-gray-400 max-sm:hidden'>
            {getTimeStamp(questions.createAt)}
          </span>
          <Link href={`/question/${questions._id}`}>
            <h3 className='font-bold line-clamp-1 flex-1'>{questions.title}</h3>
          </Link>

          {/* IF SIGNED IN SHOULD BE ABLE TO DO ACTIONS IN ITS QUESTION LIKE DELETE AND EDIT */}
        </div>
      </div>

      <div className='mt-3.5 flex flex-wrap gap-2'>
        {questions.tags.map((item) => (
          <RenderTag key={item._id} _id={item._id} name={item.name} />
        ))}
      </div>

      <div className='flex justify-between mt-6 w-full flex-wrap gap-3'>
        <Metrics
          imgUrl='/assets/icons/avatar.svg'
          alt='author'
          value={questions.author.name}
          title={"- asked " + getTimeStamp(questions.createAt)}
          href={`/profile/${questions.author._id}`}
          isAuthor={true}
          textStyle='text-sm font-extrabold text-foreground'
        />
        <Metrics
          imgUrl='/assets/icons/like.svg'
          alt='upvotes'
          value={questions.upvotes}
          title='Votes'
          textStyle='text-xs'
        />
        <Metrics
          imgUrl='/assets/icons/message.svg'
          alt='message'
          value={questions.answers.length}
          title='Answers'
          textStyle='text-xs'
        />
        <Metrics
          imgUrl='/assets/icons/eye.svg'
          alt='views'
          value={questions.views}
          title='Views'
          textStyle='text-xs'
        />
      </div>
    </div>
  );
};

export default QuestionCard;
