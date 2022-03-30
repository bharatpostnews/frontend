import React from "react";
import format from "date-fns/format";

export default function CurrentTimeDate() {
  const dateTimeDay = format(new Date(), "PPPPp");
  return (
    <p className="text-secondry font-head font-medium text-sm border-r-2 border-third pr-4">
      {dateTimeDay}
    </p>
  );
}
