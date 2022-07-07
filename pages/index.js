import Head from "next/head";
// --> Header Imports
import HeaderFinal from "../src/Layouts/Header/headerFinal";
import { navigationLinks } from "../src/lib/queries/navMenu";
import { socialLinks } from "../src/lib/queries/socialLinks";

// --> Main Hero Sectioin
import MainHerofinal from "../src/Layouts/MainHero/MainHerofinal";
import { heroPosts } from "../src/lib/queries/heroposts"; // Custom Hero Posts from WP
import { homeheadposts } from "../src/lib/queries/homeheadposts"; // 7 latest news Fetch
import HomeCat from "../src/Layouts/homeCategories/homeCat";

/////

import hellofinal from "../src/lib/queries/hellofriends";

export default function Home({
  latestPosts,
  LinksFetch,
  navLinks,
  heroPostsFetch,
  catindia,
  catchhattisgarh,
  catbusiness,
  catsports,
  catentertainment,
}) {
  return (
    <>
      <Head>
        <title>Bharat Post News - Chhattisgarh Smachar</title>
        <meta property="og:title" content="Bharat Post News" key="ogtitle" />
        <meta
          property="og:description"
          content="Chhattisgarh Hindi News and Daily Samachar"
          key="ogdesc"
        />
        <link rel="shortcut icon" href="/faviconpng.png" />

        <meta property="og:url" content="https://www.bharatpostnews.com/" />

        <meta
          property="og:image"
          content="https://res.cloudinary.com/bharat-post-news/images/v1649162930/Images/BPN/The-Bharat-Post-20220405_181706/The-Bharat-Post-20220405_181706.jpg"
        />
      </Head>
      <HeaderFinal LinksFetch={LinksFetch} navLinks={navLinks} />
      <MainHerofinal
        heroPostsFetch={heroPostsFetch}
        latestPosts={latestPosts}
      />
      <HomeCat val={catindia} val2={["देश", "india"]} />
      <HomeCat val={catchhattisgarh} val2={["छत्तीसगढ़", "chhattisgarh"]} />
      <HomeCat val={catbusiness} val2={["व्यापार", "business"]} />
      <HomeCat val={catsports} val2={["खेल", "sports"]} />
      <HomeCat val={catentertainment} val2={["मनोरंजन", "entertainment"]} />
    </>
  );
}

export async function getStaticProps() {
  const query = `query NewQuery($catname: String) {
  posts(first: 5, where: {categoryName: $catname}) {
    nodes {
      slug
      title
      excerpt
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
}`;

  const catindia = await hellofinal(query, { catname: "india" });
  const catchhattisgarh = await hellofinal(query, { catname: "chhattisgarh" });
  const catbusiness = await hellofinal(query, { catname: "business" });
  const catsports = await hellofinal(query, { catname: "sports" });
  const catentertainment = await hellofinal(query, {
    catname: "entertainment",
  });

  const latestPosts = await homeheadposts(); //  7 hero post , latest
  const LinksFetch = await socialLinks(); // social media links from wp
  const navLinks = await navigationLinks(); // Nav links names from Wp
  const heroPostsFetch = await heroPosts(); // 7 hero posts , custom set from wp

  return {
    props: {
      latestPosts,
      LinksFetch,
      navLinks,
      heroPostsFetch,
      catindia,
      catchhattisgarh,
      catbusiness,
      catsports,
      catentertainment,
    },
  };
}
