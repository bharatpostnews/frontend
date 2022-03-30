import React from "react";
import Link from "next/link";

function Type3({ postvalue }) {
  let exc = postvalue?.excerpt.split(/[<p>]/);
  console.log(postvalue);
  console.log("exc", exc);

  return (
    <div className="border-b-4 border-third pb-3 mb-4">
      <Link href={`/news/${postvalue?.slug}`}>
        <a>
          <div>
            <h2 className="text-xl font-semibold font-hd text-third2 mb-2">
              {postvalue?.title}
            </h2>
            <p className=" font-bd2 font-medium text-lg text-extra ">
              {exc[3].substring(0, 144) + "..."}
            </p>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default Type3;
