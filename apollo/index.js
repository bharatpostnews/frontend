import { ApolloClient, InMemoryCache } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";

// const cache = new InMemoryCache({
//   typePolicies: {
//     Query: {
//       fields: {
//         posts: {
//           // Don't cache separate results based on
//           // any of this field's arguments.
//           keyArgs: false,
//           // Concatenate the incoming list items with
//           // the existing list items.
//           merge(existing = [], incoming) {
//             return [...existing, ...incoming];
//           },
//         },
//       },
//     },
//   },
// });

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        posts: relayStylePagination(),
      },
    },
  },
});

//const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: "https://wpdata.bharatpostnews.com/?graphql",
  cache,
});

export default client;
