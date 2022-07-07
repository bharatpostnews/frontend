import React from "react";
import Image from "next/image";
import Link from "next/link";

const Type1 = ({ title, featuredImage, slug }) => {
  return (
    <Link href={`/news/${slug}`}>
      <a>
        <div className="hover:text-texthover mb-10">
          <h2 className=" lg:text-2xl text-xl font-semibold font-hd text-third2 mb-2 hover:text-texthover ">
            {title.substring(0, 90)}
          </h2>
          <div className="mb-2">
            {featuredImage ? (
              <Image
                src={featuredImage?.node?.sourceUrl}
                width={450}
                height={265}
                layout="responsive"
                className=""
              />
            ) : (
              <Image
                src="https://wpdata.bharatpostnews.com/wp-content/uploads/2022/03/noimage-def.webp"
                width={450}
                height={265}
                layout="responsive"
                priority
              />
            )}
          </div>
        </div>
      </a>
    </Link>
  );
};
export default Type1;
