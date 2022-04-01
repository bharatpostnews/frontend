import React, { useState } from "react";
import Link from "next/link";
import Type7 from "../../components/posts/homepagecatsection/type7";
import Type8 from "../../components/posts/homepagecatsection/type8";
function HomeCat({ val, val2 }) {
  const testval = val?.posts?.nodes.length;
  return (
    <div className="lg:mx-40 py-10 lg:px-0 px-3">
      {/* category header */}
      <div className="flex justify-between border-b-2 border-extra items-center py-2 ">
        <div className="">
          <p className="font-semibold text-4xl text-secondry">{val2[0]}</p>
        </div>
        <div>
          <Link href={`/category/${val2[1]}`}>
            <a>
              <p className="text-lg text-secondry">{`और खबरें देखें >>`}</p>
            </a>
          </Link>
        </div>
      </div>
      {/* category content */}
      {testval == 0 ? (
        <div>
          <p className="text-center font-semibold text-extra text-lg py-10">
            {" "}
            No News Available
          </p>
        </div>
      ) : (
        <div className="flex lg:flex-row flex-col gap-10">
          <div className="flex flex-col gap-5">
            <div className="border-b-2 border-third py-5">
              <Type7 content={val?.posts?.nodes[1]} />
            </div>
            <div className="border-b-2 border-third py-5">
              <Type7 content={val?.posts?.nodes[2]} />
            </div>
          </div>
          <div className="order-first">
            <div className="border-b-2 border-third py-5">
              <Type8 content={val?.posts?.nodes[0]} />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="border-b-2 border-third py-5">
              <Type7 content={val?.posts?.nodes[3]} />
            </div>
            <div className="border-b-2 border-third py-5">
              <Type7 content={val?.posts?.nodes[4]} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomeCat;
