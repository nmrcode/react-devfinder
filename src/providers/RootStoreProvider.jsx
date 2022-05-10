import React, { createContext, useContext } from "react";
import { RootStore } from "../store/RooteStore";

let store;
const StoreContext = createContext(undefined);
StoreContext.displayName = "StoreContext";

export function useRootStore() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useRootStore must be used within RootStoreProvider");
  }
  return context;
}

export function RootStoreProvider({ children }) {
  // only create root store once (store is a singleton)
  const root = new RootStore();

  return <StoreContext.Provider value={root}>{children}</StoreContext.Provider>;
}
