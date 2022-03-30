import React from "react";
import Image from "next/image";
import Link from "next/link";

const Type2 = ({ title, featuredImage, slug }) => {
  // const { title, featuredImage, slug, excerpt } = props.data;
  return (
    <Link href={`/news/${slug}`}>
      <a>
        <div className="">
          <div className="mb-1">
            {featuredImage ? (
              <Image
                src={featuredImage?.node?.sourceUrl}
                width={250}
                height={150}
                layout="responsive"
              />
            ) : (
              <Image
                src="https://bharatpostnews.com/wp-content/uploads/2022/03/noimage-def.webp"
                width={250}
                height={150}
                layout="responsive"
                priority
              />
            )}
          </div>
          <h2 className=" text-xl font-medium font-hd text-third2">
            {title.substring(0, 90)}
          </h2>
        </div>
      </a>
    </Link>
  );
};
export default Type2;
