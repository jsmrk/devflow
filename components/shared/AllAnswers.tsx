import React from "react";
import Filter from "./Filter";
import { AnswerFilters } from "@/constants/filters";
import { getAnswers } from "@/lib/actions/answer.action";
import Link from "next/link";
import Image from "next/image";
import Answer from "@/database/answer.model";
import { getTimeStamp } from "@/lib/utils";
import ParseHtml from "./ParseHtml";

interface Props {
  questionId: string;
  userId: string;
  totalAnswers: string;
  page?: number;
  filter?: number;
}

const AllAnswers = async ({
  questionId,
  userId,
  totalAnswers,
  page,
  filter,
}: Props) => {
  const result = await getAnswers({ questionId });

  return (
    <div className='mt-11 border-b-2'>
      <div className='flex items-center justify-between'>
        <h3 className='text-primary font-bold'>{totalAnswers} Answer(s)</h3>
        <Filter filter={AnswerFilters} />
      </div>

      <div>
        {result.answers.map((item) => (
          <article key={item._id} className='pt-10 pb-5 '>
            <div className='flex items-center justify-between'>
              <Link
                href={`/profile/${item.author.clerkId}`}
                className='flex flex-1 items-start gap-2 sm:items-center'
              >
                <Image
                  src={item.author.picture}
                  width={35}
                  height={25}
                  alt='profile'
                  className='rounded-full object-cover sm:flex-row sm:items-center'
                />
                <div className='flex flex-col sm:flex-row sm:items-center'>
                  <p className='text-md font-bold line-clamp-1'>
                    {item.author.name}{" "}
                  </p>
                  <span className='text-sm ml-3 line-clamp-1'>
                    - answered {getTimeStamp(item.createdAt)}
                  </span>
                </div>
              </Link>
              <div>VOTING</div>
            </div>
            <div className='mt-5'>
              <ParseHtml data={item.content} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default AllAnswers;
