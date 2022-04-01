import React from "react";
import HeaderOne from "./headerOne";
import HeaderThree from "./headerThree";
import HeaderTwo from "./headerTwo";
import MobileHeader from "./mobileHeader";

export default function HeaderFinal({ LinksFetch, navLinks }) {
  return (
    <div>
      <HeaderOne LinksFetch={LinksFetch} />
      <HeaderTwo />
      <HeaderThree navLinks={navLinks} />
      <MobileHeader navLinks={navLinks} />
    </div>
  );
}
