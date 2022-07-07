import React from "react";
import Type1 from "../../components/posts/type1";

function RightColPosts({ postLatestFetch3, postHeroFetch3 }) {
  return (
    <div className="lg:pl-7 px-3">
      {/* ADVERTISEMENT */}
      <div className="lg:py-0 py-8">
        <div className="bg-third2 w-80 h-64 mx-auto flex container justify-center items-center lg:mb-12">
          <p className="text-center text-white">ADVERTISEMENT</p>
        </div>
      </div>
      {/* Post */}
      <div>
        {postLatestFetch3.map((nodes, i) => {
          return (
            <div className="  pb-5" key={i}>
              <Type1
                title={nodes?.title}
                excerpt={nodes?.excerpt}
                featuredImage={nodes?.featuredImage}
                slug={nodes?.slug}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RightColPosts;
