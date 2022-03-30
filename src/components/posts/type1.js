import React from "react";
import Image from "next/image";
import Link from "next/link";

const Type1 = ({ title, featuredImage, slug, excerpt }) => {
  return (
    <Link href={`/news/${slug}`}>
      <a>
        <div className="">
          <h2 className=" text-2xl font-semibold font-hd text-third2 mb-2">
            {title.substring(0, 90)}
          </h2>
          <div className="mb-2">
            {featuredImage ? (
              <Image
                src={featuredImage?.node?.sourceUrl}
                width={450}
                height={265}
                layout="responsive"
              />
            ) : (
              <Image
                src="https://bharatpostnews.com/wp-content/uploads/2022/03/noimage-def.webp"
                width={450}
                height={265}
                layout="responsive"
                priority
              />
            )}
          </div>
          <div>
            {excerpt && (
              <p className=" font-bd2 font-medium text-xl text-extra ">
                {excerpt.substring(3, 160) + "..."}
              </p>
            )}
          </div>
        </div>
      </a>
    </Link>
  );
};
export default Type1;
