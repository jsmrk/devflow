import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

interface Props {
  title: string;
  description: string;
  link: string;
  linkTitle: string;
}

const NoResult = ({ title, description, link, linkTitle }: Props) => {
  return (
    <div className='mt-10 flex w-full flex-col items-center justify-center'>
      <Image
        src={"/assets/images/light-illustration.png"}
        alt='No Results Found'
        width={270}
        height={200}
        className='block object-contain'
      />
      <h2 className='text-xl font-bold mt-8'>{title}</h2>
      <p className='text-sm mt-3 mb-5'>
        Ask a question right away and be the first!{description}
      </p>
      <Link href={link}>
        <Button>{linkTitle}</Button>
      </Link>
    </div>
  );
};

export default NoResult;
