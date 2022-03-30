import fetchAPI from "./fetching";

export async function homeheadposts() {
  const data = await fetchAPI(
    `
      query homeheadposts {
          posts(first: 7) {
              nodes {
                    id
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
      }    
`
  );

  return data?.posts;
}
