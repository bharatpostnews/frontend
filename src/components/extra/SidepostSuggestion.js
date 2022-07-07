import React from "react";
import Type9 from "../posts/type9sidesuggest";
import { gql, useQuery, useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";

function SidepostSuggestion({ catg, catg2 }) {
  const [sidePost, setSidePost] = useState({});
  const query = gql`
    query postbyCategory($nameofcat: String) {
      posts(first: 4, where: { categoryName: $nameofcat }) {
        nodes {
          title
          excerpt
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `;
  const { error, loading, data } = useQuery(
    query,
    { variables: { nameofcat: catg } },
    {
      notifyOnNetworkStatusChange: true,
    }
  );
  useEffect(() => {
    if (data) {
      setSidePost(data);
    }
  }, [data]);
  if (error) {
    console.log(error);
  }

  if (!data && loading) {
    console.log("loading now ...", loading);
  }
  // console.log("data fetch", data);
  // console.log("post copy of data", sidePost);

  return (
    <div className="px-3">
      <div>
        <p className="text-secondry text-2xl font-semibold mb-2 lg:mx-40">
          {catg2} की ताजा खबरें
        </p>
      </div>
      <div className="flex lg:flex-row flex-col lg:mx-40 bg-primary  ">
        <div className="px-3 flex-1 hover:bg-primaryshade py-5 ">
          <Type9 postvalue={sidePost?.posts?.nodes[0]} />
        </div>
        <div className="px-3 flex-1 hover:bg-primaryshade py-5">
          <Type9 postvalue={sidePost?.posts?.nodes[1]} />
        </div>
        <div className="px-3 flex-1 hover:bg-primaryshade py-5">
          <Type9 postvalue={sidePost?.posts?.nodes[2]} />
        </div>
        <div className="px-3 flex-1 hover:bg-primaryshade py-5">
          <Type9 postvalue={sidePost?.posts?.nodes[3]} />
        </div>
      </div>
    </div>
  );
}

export default SidepostSuggestion;
