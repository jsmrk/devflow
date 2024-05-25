import Image from "next/image";
import React from "react";

interface Props {
  imgUrl: string;
  alt: string;
  value: string | number;
  title: string;
  href?: string;
  textStyle?: string;
  isAuthor?: boolean;
}

const Metrics = (metric: Props) => {
  return (
    <div className='flex justify-center flex-wrap gap-1 text-gray-500'>
      <Image
        src={metric.imgUrl}
        alt={metric.alt}
        width={16}
        height={16}
        className={`object-contain ${
          metric.href ? "rounded-full" : ""
        } hover:cursor-pointer`}
      />

      <p className={`${metric.textStyle} flex items-center gap-1`}>
        <span>{metric.value}</span>
        <span
          className={`line-clamp-1 ${metric.isAuthor ? "max-sm-hidden" : ""}`}
        >
          {metric.title}
        </span>
      </p>
    </div>
  );
};

export default Metrics;
