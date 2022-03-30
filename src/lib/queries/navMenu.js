import fetchAPI from "./fetching";

export async function navigationLinks() {
  const data = await fetchAPI(
    `
      query fetchMenus {
         menu(id: "headernav", idType: NAME) {
             menuItems {
                 nodes {
                      label
                      path
                 }
             }
         }
     }
 `
  );

  return data?.menu?.menuItems;
}
