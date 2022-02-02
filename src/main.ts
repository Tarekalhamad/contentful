import { createApp } from "vue";
import App from "./App.vue";

import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { createApolloProvider } from "@vue/apollo-option";

const cache = new InMemoryCache();
const apolloClient = new ApolloClient({
  cache,
  
  uri: "https://graphql.contentful.com/content/v1/spaces/jr8dcjlyvv5x/environments/master?access_token=Q-hSYHANyqni75kNixs1ulQmtiK9dECBcnHM469vXMc",
});

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
});

const app = createApp(App);
app.use(apolloProvider);
app.mount("#app");
