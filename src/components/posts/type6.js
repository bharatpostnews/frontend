import React from "react";
import Link from "next/link";
import Image from "next/image";

function Type6({ featuredImage, title, slug }) {
  return (
    <Link href={`/news/${slug}`}>
      <a>
        <div className="border-b-2 border-third">
          <div className="flex mb-10 ">
            <div className="lg:w-3/12 mr-2 basis-1/4">
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
            <div className="lg:w-9/12 basis-3/4">
              <h2 className="font-hd font-medium lg:text-xl text-lg text-third2 mb-2">
                {title}
              </h2>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default Type6;
