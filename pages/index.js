// --> Header Imports
import HeaderFinal from "../src/Layouts/Header/headerFinal";
import { navigationLinks } from "../src/lib/queries/navMenu";
import { socialLinks } from "../src/lib/queries/socialLinks";

// --> Main Hero Sectioin
import MainHerofinal from "../src/Layouts/MainHero/MainHerofinal";
import { heroPosts } from "../src/lib/queries/heroposts"; // Custom Hero Posts from WP
import { homeheadposts } from "../src/lib/queries/homeheadposts"; // 7 latest news Fetch

export default function Home({
  latestPosts,
  LinksFetch,
  navLinks,
  heroPostsFetch,
}) {
  return (
    <>
      <HeaderFinal LinksFetch={LinksFetch} navLinks={navLinks} />
      <MainHerofinal
        heroPostsFetch={heroPostsFetch}
        latestPosts={latestPosts}
      />
    </>
  );
}

export async function getStaticProps() {
  const latestPosts = await homeheadposts(); //  7 hero post , latest
  const LinksFetch = await socialLinks(); // social media links from wp
  const navLinks = await navigationLinks(); // Nav links names from Wp
  const heroPostsFetch = await heroPosts(); // 7 hero posts , custom set from wp

  return {
    props: { latestPosts, LinksFetch, navLinks, heroPostsFetch },
  };
}
