const menuFetch = `
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
 `;
export default menuFetch;
