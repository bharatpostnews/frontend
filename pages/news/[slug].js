import React from "react";
import Head from "next/head";
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
      <Head>
        <title>BPN - {final?.post.title}</title>
        <link rel="shortcut icon" href="/faviconpng.png" />
        <meta property="og:title" content={final?.post.title} key="ogtitle" />
        <meta
          property="og:url"
          content={`https://www.bharatpostnews.com/news/${final?.post.slug}`}
        />

        <meta property="og:image" content={final?.post.featuredImage} />
      </Head>
      <HeaderFinal LinksFetch={LinksFetch} navLinks={navLinks} />
      {/* whole main body wrapper */}
      <div className="container mx-auto mt-10">
        {/* 2 columns wrapper */}
        <div className=" lg:mx-40 flex flex-col lg:flex-row justify-between mb-10">
          {/* colums left */}
          <div className="lg:w-8/12 lg:px-10 px-3 lg:border-r-2 border-third">
            <PostSection final={final} />
          </div>
          {/* column right */}
          <div className="lg:w-4/12  px-3">
            <Adpostpage />
          </div>
        </div>

        <div>
          <SidepostSuggestion
            catg={final?.post?.categories?.nodes[0]?.slug}
            catg2={final?.post?.categories?.nodes[0]?.name}
          />
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
    fallback: false,
  };
}
