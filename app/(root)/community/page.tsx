import UserCard from "@/components/shared/cards/UserCard";
import Filter from "@/components/shared/Filter";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { UserFilters } from "@/constants/filters";
import { getAllUsers } from "@/lib/actions/user.action";
import React from "react";

const Community = async () => {
  const result = await getAllUsers({});

  return (
    <div>
      <h1 className='text-3xl font-extrabold'>All Users</h1>

      <div className='mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center'>
        <LocalSearchbar
          route={"/community"}
          iconPosition={"left"}
          imgSrc={"/assets/icons/search.svg"}
          placeholder={"Search for this amazing minds"}
          otherClasses={"flex-1"}
        />
        <Filter
          filter={UserFilters}
          otherClasses={"sm:min-w-[170px]"}
          containerClasses={"max-md:hidden flex"}
        />
      </div>

      <section className='mt-12 flex flex-wrap gap-4'>
        {result.users.length > 0 ? (
          result.users.map((item) => <UserCard key={item.name} user={item} />)
        ) : (
          <div>No User Yet</div>
        )}
      </section>
    </div>
  );
};

export default Community;
