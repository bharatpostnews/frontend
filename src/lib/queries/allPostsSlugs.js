import fetchAPI from "./fetching";

export async function allPostsSlugs() {
  const data = await fetchAPI(
    `
      query fetchAllSlugs {
        posts(first: 10000) {
            nodes {
            slug
    }
  }
}
`
  );

  return data?.posts;
}
