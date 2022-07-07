import React from "react";
import Image from "next/image";
import Link from "next/link";

function Type4({ postvalue }) {
  return (
    <div className="border-b-4 border-third pb-3 mb-4">
      <Link href={`/news/${postvalue?.slug}`}>
        <a>
          <div>
            <h2 className="text-xl font-semibold font-hd text-third2 mb-2">
              {postvalue?.title}
            </h2>
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
          </div>
        </a>
      </Link>
    </div>
  );
}

export default Type4;
