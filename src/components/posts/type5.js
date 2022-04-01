import React from "react";
import Image from "next/image";
import Link from "next/link";

function Type5({ featuredImage, title, excerpt, slug }) {
  let newExcerpt = excerpt.split(/[<p>]/);
  return (
    <Link href={`/news/${slug}`}>
      <a>
        <div className="container flex flex-col lg:flex-row justify-between bg-primary p-5 lg:py-10 lg:px-9 rounded ">
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
          <div className="lg:px-10">
            <h2 className="lg:text-4xl text-2xl font-semibold font-hd text-white lg:mb-5 lg:py-0 py-3">
              {title}
            </h2>
            <p className="font-bd2 font-medium lg:text-2xl text-lg text-extra">
              {newExcerpt[3].substring(0, 200) + "..."}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default Type5;
