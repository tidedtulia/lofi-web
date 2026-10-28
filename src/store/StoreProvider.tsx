"use client";
import { PrimeReactProvider } from "primereact/api";
import { Provider } from "react-redux";

import { store } from ".";

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PrimeReactProvider>{children}</PrimeReactProvider>
    </Provider>
  );
};
