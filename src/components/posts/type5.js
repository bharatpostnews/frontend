import React from "react";
import Image from "next/image";
import Link from "next/link";

function Type5({ featuredImage, title, excerpt, slug }) {
  let newExcerpt = excerpt.split(/[<p>]/);
  return (
    <Link href={`/news/${slug}`}>
      <a>
        <div className="flex justify-between bg-primary py-10 container px-9 rounded ">
          <div className="">
            {featuredImage ? (
              <Image
                src={featuredImage?.node?.sourceUrl}
                height={800}
                width={1300}
                className="rounded"
              />
            ) : (
              <Image
                src="https://wpdata.bharatpostnews.com/wp-content/uploads/2022/03/noimage-def.webp"
                height={800}
                width={1300}
                className="rounded"
              />
            )}
          </div>
          <div className="px-10">
            <h2 className="text-4xl font-semibold font-hd text-white mb-5">
              {title}
            </h2>
            <p className="font-bd2 font-medium text-2xl text-extra">
              {newExcerpt[3].substring(0, 200) + "..."}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default Type5;
