import React from "react";
import CurrentTimeDate from "../../components/header/currentTimeDate";
import SocialIcons from "../../components/header/socialIcons";

export default function HeaderOne({ LinksFetch }) {
  return (
    <div className=" hidden xl:block lg:block 2xl:block border-b-2 py-1 border-third ">
      <div className="mx-40 flex justify-between">
        <CurrentTimeDate />
        <SocialIcons LinksFetch={LinksFetch} />
      </div>
    </div>
  );
}
