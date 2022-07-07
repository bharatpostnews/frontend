import React from "react";
import Link from "next/link";
import Image from "next/image";

function Type8({ content }) {
  return (
    <div>
      <Link href={`/news/${content.slug}`}>
        {/*         <a className="flex flex-col">
          <h2 className="font-hd font-semibold text-third2 text-xl mb-2">
            {content.title}
          </h2>
          <div className="mb-2">
            {content.featuredImage ? (
              <Image
                src={content.featuredImage?.node?.sourceUrl}
                height={150}
                width={200}
                layout="responsive"
              />
            ) : (
              <Image
                src="https://wpdata.bharatpostnews.com/wp-content/uploads/2022/03/noimage-def.webp"
                height={150}
                width={200}
                layout="responsive"
                priority
              />
            )}
          </div>
        </a> */}
        <a>
          {content.featuredImage ? (
            <Image
              src={content.featuredImage?.node?.sourceUrl}
              height={140}
              width={200}
              layout="responsive"
              className=""
            />
          ) : (
            <Image
              src="https://wpdata.bharatpostnews.com/wp-content/uploads/2022/03/noimage-def.webp"
              height={140}
              width={200}
              layout="responsive"
              priority
            />
          )}
          <div className="py-2 bg-primary h-full">
            <p className="font-hd font-semibold text-slate-50 text-xl p-5 ">
              {content.title}
            </p>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default Type8;
