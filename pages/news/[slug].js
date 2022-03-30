import React from "react";
import { allPostsSlugs } from "../../src/lib/queries/allPostsSlugs";
import hellofinal from "../../src/lib/queries/hellofriends";
import HeaderFinal from "../../src/Layouts/Header/headerFinal";
import { socialLinks } from "../../src/lib/queries/socialLinks";
import { navigationLinks } from "../../src/lib/queries/navMenu";
import PostSection from "../../src/Layouts/PostPage/postSection";
import Adpostpage from "../../src/components/extra/Adpostpage";
import SidepostSuggestion from "../../src/components/extra/SidepostSuggestion";

export default function PostPageMain({ final, LinksFetch, navLinks }) {
  return (
    <div>
      <HeaderFinal LinksFetch={LinksFetch} navLinks={navLinks} />
      {/* whole main body wrapper */}
      <div className="container mx-auto mt-10">
        {/* 2 columns wrapper */}
        <div className=" mx-40 flex justify-between">
          {/* colums left */}
          <div className="w-8/12  px-3 border-r-4 border-extra">
            <PostSection final={final} />
          </div>
          {/* column right */}
          <div className="w-4/12  px-3">
            <Adpostpage />
            <SidepostSuggestion
              catg={final?.post?.categories?.nodes[0]?.slug}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const LinksFetch = await socialLinks(); // social media links from wp
  const navLinks = await navigationLinks(); // Nav links names from Wp

  const variable = {
    ida: params.slug,
  };
  const query = `
     query allPostsFetch($ida: ID!) {
  post(id: $ida, idType: SLUG) {
    title
    excerpt
    content
    date
    slug
    author {
      node {
        name
      }
    }
    categories {
      nodes {
        name
        slug
      }
    }
    featuredImage {
      node {
        sourceUrl
      }
    }
  }
}
`;
  const final = await hellofinal(query, variable);
  return {
    props: {
      final,
      LinksFetch,
      navLinks,
    },
  };
}

export async function getStaticPaths() {
  const dataf = await allPostsSlugs();
  const paths = dataf?.nodes.map((nodes) => `/news/${nodes?.slug}`) || [];

  return {
    paths,
    fallback: true,
  };
}
