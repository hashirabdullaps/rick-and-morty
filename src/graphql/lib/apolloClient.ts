import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { IncomingHttpHeaders } from "http";
import { mergeCharacter } from '../queries/useFetchCharactersQuery';

const createHttpLink = (headers: IncomingHttpHeaders | null = null) => {
  const httpLink = new HttpLink({
    uri: process.env.REACT_APP_RM_API,
    headers,
  });
  return httpLink;
};

export const apolloClient = new ApolloClient({
  ssrMode: typeof window === "undefined",
  link: createHttpLink(),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          characters: {
            keyArgs: false,
            merge(existing = [], incoming: any[]) {
              return mergeCharacter(existing, incoming);;
            },
          },
        },
      },
    },
  }),
  credentials: "include",
});
