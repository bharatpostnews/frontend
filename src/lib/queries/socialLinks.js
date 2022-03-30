import fetchAPI from "./fetching";

export async function socialLinks() {
  const data = await fetchAPI(
    `
     query FetchSocialData {
        socialLinks {
            nodes {
                title
                smlinks {
                    accountUrl
                }
            }
        }
    }   
`
  );

  return data?.socialLinks;
}
