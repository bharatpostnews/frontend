import React from "react";
import LeftColPosts from "./leftColPosts";
import RightColPosts from "./rightColPosts";

function MainHerofinal({ heroPostsFetch, latestPosts }) {
  /// first 7 latest news fetch
  const postLatestFetch1 = latestPosts?.nodes.slice(0, 2); // left 2 posts
  const postLatestFetch2 = latestPosts?.nodes.slice(2, 5); // miidle 3 posts
  const postLatestFetch3 = latestPosts?.nodes.slice(5, 7); // right 2 posts

  /// custom news checking
  const postHeroFetch1 = heroPostsFetch?.nodes.slice(0, 2); // left 2 posts
  const postHeroFetch2 = heroPostsFetch?.nodes.slice(2, 5); // miidle 3 posts
  const postHeroFetch3 = heroPostsFetch?.nodes.slice(5, 7); // right 2 posts

  return (
    <div className="container mx-auto mt-10 ">
      {/* -Container wrapping two colums */}
      <div className=" lg:mx-40 flex flex-col lg:flex-row justify-between border-b-4 border-third ">
        {/* - - Column Left */}
        <div className="lg:w-8/12  ">
          {/* Hero Posts */}
          <LeftColPosts
            postLatestFetch1={postLatestFetch1}
            postLatestFetch2={postLatestFetch2}
            postHeroFetch1={postHeroFetch1}
            postHeroFetch2={postHeroFetch2}
          />
        </div>
        {/* - - Column Right */}
        <div className="lg:w-4/12 border-l-4 border-third">
          <RightColPosts
            postHeroFetch3={postHeroFetch3}
            postLatestFetch3={postLatestFetch3}
          />
        </div>
      </div>
    </div>
  );
}

export default MainHerofinal;
