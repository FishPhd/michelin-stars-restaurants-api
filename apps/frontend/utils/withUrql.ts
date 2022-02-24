import {
  createClient,
  dedupExchange,
  cacheExchange,
  fetchExchange,
  ssrExchange,
} from "@urql/core";

const isServerSide = typeof window === "undefined";

// The `ssrExchange` must be initialized with `isClient` and `initialState`
const ssrCache = ssrExchange({
  isClient: !isServerSide,
});

const client = createClient({
  url: "http://localhost:4000/graphql",
  exchanges: [
    dedupExchange,
    cacheExchange,
    ssrCache, // Add `ssr` in front of the `fetchExchange`
    fetchExchange,
  ],
  fetchOptions: () => {
    return { headers: {} };
  },
});

export { client, ssrCache };
