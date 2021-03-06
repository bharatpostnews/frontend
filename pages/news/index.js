import React from "react";
import { gql, useQuery } from "@apollo/client";
import HeaderFinal from "../../src/Layouts/Header/headerFinal";
import { socialLinks } from "../../src/lib/queries/socialLinks";
import { navigationLinks } from "../../src/lib/queries/navMenu";
import Type6 from "../../src/components/posts/type6";

const postLatestALL = gql`
  query latestposts($first: Int, $endCus: String) {
    posts(first: $first, after: $endCus) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          slug
          title
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;
function India({ LinksFetch, navLinks }) {
  const { data, loading, error, fetchMore } = useQuery(postLatestALL, {
    fetchPolicy: "network-only",
    variables: { first: 12, endCus: null },
    notifyOnNetworkStatusChange: true,
  });
  if (error) {
    console.log(error);
    return <p>Sorry, an error has occurred. Please reload the page.</p>;
  }

  if (!data && loading) {
    return <p>Loading...</p>;
  }

  if (!data?.posts?.edges.length) {
    return <p>No posts have been published.</p>;
  }
  const postdata = data?.posts?.edges;

  return (
    <>
      <div>
        {/* Header */}
        <div className="">
          <HeaderFinal LinksFetch={LinksFetch} navLinks={navLinks} />
        </div>
        {/* main content area */}
        <div className="lg:mx-40">
          {/* heading of categories */}
          <div className="container mb-10 mt-20 ">
            <div className="">
              <p className="font-hd text-2xl font-semibold text-secondry  ">
                ताजा खबरें
              </p>
              <p className="border-b-2 border-third  "></p>
            </div>
          </div>
          {/* main body area - having 2 columns */}
          <div className="">
            {/* post content left */}
            <div className="  ">
              {/* post content - posts */}
              <div>
                {postdata.map((node, index) => {
                  {
                    return (
                      <div key={index}>
                        <Type6
                          featuredImage={node?.node?.featuredImage}
                          title={node?.node?.title}
                          slug={node?.node?.slug}
                        />
                      </div>
                    );
                  }
                })}
              </div>
            </div>
            {/* sidebar content - right */}
            <div className=" "></div>
          </div>
          {/* Load more button */}
          <div className=" ">
            {data?.posts?.pageInfo?.hasNextPage ? (
              <form
                className="flex"
                method="post"
                onSubmit={(e) => {
                  e.preventDefault();
                  fetchMore({
                    variables: { endCus: data?.posts?.pageInfo?.endCursor },
                  });
                }}
              >
                <button
                  type="submit"
                  disabled={loading}
                  className="px-10 py-3 text-xl bg-secondry mx-auto rounded-xl text-white font-semibold font-bd2"
                >
                  {loading ? "Loading..." : "अगली खबर"}
                </button>
              </form>
            ) : (
              <p className="text-center">✅ समाप्त.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default India;

export async function getStaticProps() {
  const LinksFetch = await socialLinks(); // social media links from wp
  const navLinks = await navigationLinks(); // Nav links names from Wp

  return {
    props: {
      LinksFetch,
      navLinks,
    },
  };
}
