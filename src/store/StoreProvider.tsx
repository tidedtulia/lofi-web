"use client";
import { Provider } from "react-redux";
import { PrimeReactProvider } from "primereact/api";
import { store } from ".";

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PrimeReactProvider>{children}</PrimeReactProvider>
    </Provider>
  );
};
