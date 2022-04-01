import React from "react";
import Link from "next/link";
import Image from "next/image";

function Type7({ content }) {
  const newex = content.excerpt.split(/[<p>]/);
  return (
    <Link href={`/news/${content.slug}`}>
      <a>
        <div className="flex flex-col">
          <h2 className="font-hd font-semibold text-third2 text-xl mb-2">
            {content.title}
          </h2>
          <p className="font-bd2 font-semibold text-lg text-extra">
            {newex[3].substring(0, 150) + "..."}
          </p>
        </div>
      </a>
    </Link>
  );
}

export default Type7;
