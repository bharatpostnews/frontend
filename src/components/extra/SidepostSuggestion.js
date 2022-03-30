import React from "react";
import Type3 from "../posts/type3";
import Type4 from "../posts/type4";
import { gql, useQuery, useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";

function SidepostSuggestion({ catg }) {
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
  console.log("data fetch", data);
  console.log("post copy of data", sidePost);

  return (
    <div className="px-3">
      <div>
        <p className="text-secondry text-2xl font-semibold mb-2">
          {catg} की ताजा खबरें
        </p>
        <p className="border-b-4 border-extra mb-7"></p>
      </div>
      <div>
        {/* <Type4 postvalue={sidePost?.posts?.nodes[0]} />
        <Type3 postvalue={sidePost?.posts?.nodes[1]} />
        <Type3 postvalue={sidePost?.posts?.nodes[2]} />
        <Type3 postvalue={sidePost?.posts?.nodes[3]} /> */}
      </div>
    </div>
  );
}

export default SidepostSuggestion;
