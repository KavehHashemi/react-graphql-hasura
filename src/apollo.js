/* eslint-disable linebreak-style */
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import fetch from "node-fetch";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://growling-mantra.hasura.app/v1/graphql",
    fetch,
    credentials:
      "BUnIz73pK3xh9qagIrfiExpWnuz07gFHxW9KJ70FARWxU1jXA4WGXW7aiOYWdtGb",
    headers: {
      "content-type": "application/json",
      "x-hasura-admin-secret":
        "BUnIz73pK3xh9qagIrfiExpWnuz07gFHxW9KJ70FARWxU1jXA4WGXW7aiOYWdtGb",
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
