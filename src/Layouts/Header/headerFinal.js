import React from "react";
import HeaderOne from "./headerOne";
import HeaderThree from "./headerThree";
import HeaderTwo from "./headerTwo";

export default function HeaderFinal({ LinksFetch, navLinks }) {
  return (
    <div>
      <HeaderOne LinksFetch={LinksFetch} />
      <HeaderTwo />
      <HeaderThree navLinks={navLinks} />
    </div>
  );
}
