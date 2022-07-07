import React from "react";
import Image from "next/image";
import Link from "next/link";

const Type2 = ({ title, featuredImage, slug }) => {
  // const { title, featuredImage, slug, excerpt } = props.data;
  return (
    <Link href={`/news/${slug}`}>
      <a>
        <div className="flex flex-row-reverse lg:flex-col border-b-2 py-4 lg:py-0 lg:border-0">
          <div className="lg:mb-1 w-4/12 lg:w-full">
            {featuredImage ? (
              <Image
                src={featuredImage?.node?.sourceUrl}
                width={250}
                height={150}
                layout="responsive"
              />
            ) : (
              <Image
                src="https://wpdata.bharatpostnews.com/wp-content/uploads/2022/03/noimage-def.webp"
                width={250}
                height={150}
                layout="responsive"
                priority
              />
            )}
          </div>
          <h2 className=" lg:text-xl font-semibold lg:font-medium font-hd text-third2 w-8/12 lg:w-full hover:text-texthover ">
            {title.substring(0, 90)}
          </h2>
        </div>
      </a>
    </Link>
  );
};
export default Type2;
