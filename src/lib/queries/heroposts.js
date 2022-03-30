import fetchAPI from "./fetching";

export async function heroPosts() {
  const data = await fetchAPI(
    `
      query heroPosts {
  heroPosts(where: {orderby: {field: DATE, order: ASC}}) {
    nodes {
			title
      postSelection {
        postSelector {
          __typename
          ... on Post {
            slug
            title
            excerpt
            featuredImage{
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
}
`
  );

  return data?.heroPosts;
}
