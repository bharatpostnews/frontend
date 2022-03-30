import React from "react";
import Link from "next/link";
import Image from "next/image";

function Type6({ featuredImage, title, excerpt, slug }) {
  let newExcerpt = excerpt.split(/[<p>]/);

  return (
    <Link href={`/news/${slug}`}>
      <a>
        <div className="flex justify-between m-5 border-2 border-third rounded p-5 hover:shadow-md ">
          <div className="w-3/12">
            {featuredImage ? (
              <Image
                src={featuredImage?.node?.sourceUrl}
                height={200}
                width={250}
                className="rounded"
              />
            ) : (
              <Image
                src="https://wpdata.bharatpostnews.com/wp-content/uploads/2022/03/noimage-def.webp"
                height={200}
                width={250}
                className="rounded"
              />
            )}
          </div>
          <div className="w-9/12">
            <h2 className="font-hd font-semibold text-2xl text-third2 mb-2">
              {title}
            </h2>
            <p className="font-bd2 font-medium text-extra text-lg">
              {newExcerpt[3].substring(0, 250) + "..."}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default Type6;
