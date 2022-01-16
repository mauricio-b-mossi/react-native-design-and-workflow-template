import React, { useEffect } from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import Navigation from "./Navigation/Navigation";
import { QueryClientProvider } from "react-query";
import { QueryClient } from "react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "./slices/loginSlice";

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
