import React from "react";
import Link from "next/link";
import Image from "next/image";

function Type7({ content }) {
  return (
    <>
      <Link href={`/news/${content.slug}`}>
        <a>
          <div className="grid grid-cols-8 gap-4 border-b-2 pb-5">
            {content.featuredImage ? (
              <div className="col-span-2">
                <Image
                  src={content.featuredImage?.node?.sourceUrl}
                  height={15}
                  width={30}
                  layout="responsive"
                />
              </div>
            ) : (
              <div>
                <Image
                  src="https://wpdata.bharatpostnews.com/wp-content/uploads/2022/03/noimage-def.webp"
                  height={150}
                  width={200}
                  layout="responsive"
                  priority
                />
              </div>
            )}

            <h2 className="font-hd lg:font-semibold font-medium text-third2 text-lg mb-2 col-span-6">
              {content.title.substring(0, 100) + "..."}
            </h2>
          </div>
        </a>
      </Link>
    </>
  );
}

export default Type7;
