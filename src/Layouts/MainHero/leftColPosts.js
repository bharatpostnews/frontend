import React from "react";
import Type1 from "../../components/posts/type1";
import Type2 from "../../components/posts/type2";

function LeftColPosts({
  postLatestFetch1,
  postLatestFetch2,
  postHeroFetch1,
  postHeroFetch2,
}) {
  return (
    <div className="flex flex-col lg:flex-row lg:px-0 px-3 border-third ">
      {/* - - - Left Col, Left part Wrapper */}
      <div className="lg:w-3/5 lg:pr-7 ">
        {/* - - - - normal wrap */}
        <div>
          {/* loop starts here to assing post  */}
          {postLatestFetch1.map((nodes, i) => {
            /*             if (postHeroFetch1[i]?.postSelection?.postSelector) {
              console.log(
                "if option triggered in left-left-col" +
                  postHeroFetch1[i]?.postSelection?.postSelector?.title +
                  "2nd title" +
                  nodes?.title
              );
              return (
                <div className="lg:mb-16 mb-5" key={i}>
                  <Type1
                    title={
                      postHeroFetch1[i]?.postSelection?.postSelector?.title
                    }
                    excerpt={
                      postHeroFetch1[i]?.postSelection?.postSelector?.excerpt
                    }
                    featuredImage={
                      postHeroFetch1[i]?.postSelection?.postSelector
                        ?.featuredImage
                    }
                    slug={postHeroFetch1[i]?.postSelection?.postSelector?.slug}
                  />
                </div>
              );
            }  */
            return (
              <div className="lg:mb-16 mb-5" key={i}>
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
      {/* - - - Left col,Right part Wrapper */}
      <div className="lg:w-2/5 lg:pr-7">
        {/* - - - - normal wrap */}
        <div>
          {postLatestFetch2.map((nodes, i) => {
            if (postHeroFetch2[i]?.postSelection?.postSelector) {
              return (
                <div className="lg:mb-12 " key={i}>
                  <Type2
                    featuredImage={
                      postHeroFetch1[i]?.postSelection?.postSelector
                        ?.featuredImage
                    }
                    slug={postHeroFetch1[i]?.postSelection?.postSelector?.slug}
                    title={
                      postHeroFetch1[i]?.postSelection?.postSelector?.title
                    }
                  />
                </div>
              );
            } else {
              return (
                <div className="lg:mb-12" key={i}>
                  <Type2
                    featuredImage={nodes?.featuredImage}
                    slug={nodes?.slug}
                    title={nodes?.title}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default LeftColPosts;
