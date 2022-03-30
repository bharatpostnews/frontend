import React from "react";
import Type1 from "../../components/posts/type1";

function RightColPosts({ postLatestFetch3, postHeroFetch3 }) {
  return (
    <div className="px-3">
      {/* ADVERTISEMENT */}
      <div className="bg-third2 w-80 h-64 mx-auto flex container justify-center items-center mb-12">
        <p className="text-center text-white">ADVERTISEMENT</p>
      </div>
      {/* Post */}
      <div>
        {postLatestFetch3.map((nodes, i) => {
          if (postHeroFetch3[i]?.postSelection?.postSelector) {
            return (
              <div className="mb-10 border-b-2 border-third pb-5" key={i}>
                <Type1
                  title={postHeroFetch3[i]?.postSelection?.postSelector?.title}
                  excerpt={
                    postHeroFetch3[i]?.postSelection?.postSelector?.excerpt
                  }
                  featuredImage={
                    postHeroFetch3[i]?.postSelection?.postSelector
                      ?.featuredImage
                  }
                  slug={postHeroFetch3[i]?.postSelection?.postSelector?.slug}
                />
              </div>
            );
          } else {
            return (
              <div className="mb-10 border-b-2 border-third pb-5" key={i}>
                <Type1
                  title={nodes?.title}
                  excerpt={nodes?.excerpt}
                  featuredImage={nodes?.featuredImage}
                  slug={nodes?.slug}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default RightColPosts;
