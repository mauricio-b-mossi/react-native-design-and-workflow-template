import React from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import Navigation from "./Navigation/Navigation";
import { QueryClientProvider } from "react-query";
import { QueryClient } from "react-query";

export default function App() {

  const client = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <Navigation />
      </QueryClientProvider>
    </Provider>
  );
}
