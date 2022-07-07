import React from "react";
import Image from "next/image";
import Link from "next/link";

function Type9({ postvalue }) {
  console.log(postvalue);
  return (
    <Link href={`/news/${postvalue?.slug}`}>
      <a>
        <div className="">
          {postvalue?.featuredImage ? (
            <Image
              src={postvalue?.featuredImage?.node?.sourceUrl}
              width={380}
              height={215}
              layout="responsive"
            />
          ) : (
            <Image
              src="https://wpdata.bharatpostnews.com/wp-content/uploads/2022/03/noimage-def.webp"
              width={380}
              height={215}
              layout="responsive"
              priority
            />
          )}
          <h2 className="text-lg font-medium font-hd text-slate-50 pt-1">
            {postvalue?.title.substring(0, 80) + ".."}
          </h2>
        </div>
      </a>
    </Link>
  );
}

export default Type9;
