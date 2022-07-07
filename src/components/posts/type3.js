import React from "react";
import Link from "next/link";

function Type3({ postvalue }) {
  return (
    <div className="border-b-4 border-third pb-3 mb-4">
      <Link href={`/news/${postvalue?.slug}`}>
        <a>
          <div>
            <h2 className="text-xl font-semibold font-hd text-third2 mb-2 hover:text-texthover ">
              {postvalue?.title}
            </h2>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default Type3;
