import { Badge } from "@/components/ui/badge";
import { getTopInteractedTags } from "@/lib/actions/tag.action";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "../RenderTag";

interface Props {
  user: {
    _id: string;
    clerkId: string;
    picture: string;
    name: string;
    username: string;
  };
}

const UserCard = async ({ user }: Props) => {
  const interactedTags = await getTopInteractedTags({ userId: user._id });

  return (
    <Link
      href={`/profile/${user.clerkId}`}
      className='w-full max-xs:min-w-full md:w-[260px]'
    >
      <article className='bg-gray w-full flex flex-col items-center justify-center rounded-2xl p-8 '>
        <Image
          src={user.picture}
          alt='user profile picter'
          width={100}
          height={100}
          className='rounded-full '
        />

        <div className='mt-3 text-center'>
          <h3 className='text-2xl font-bold line-clamp-1'>
            <p>{user.name}</p>
          </h3>
          <p className='mt-1'>@{user.username}</p>
        </div>
        <div className='mt-5'>
          {interactedTags!.length > 0 ? (
            <div className='flex items-center gap-2 '>
              {interactedTags!.map((item) => (
                <RenderTag key={item._id} _id={item._id} name={item.name} />
              ))}
            </div>
          ) : (
            <Badge>No Tags Yet</Badge>
          )}
        </div>
      </article>
    </Link>
  );
};

export default UserCard;
