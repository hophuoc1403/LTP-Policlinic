import { createContext, useEffect, useState } from "react";
import { postToAPI } from "./utils/fetchFromApi";

export const StoreContext = createContext(null);

export default function GLobalState({ children }) {
  // JSON.parse(localStorage.getItem("user") || "[]")
  const [currentAccount, setCurrentAccount] = useState({
    account: {},
    state: false,
  });
  const [infoAppoint, setInfoAppoint] = useState([]);

  useEffect(() => {
    setInfoAppoint(JSON.parse(localStorage.getItem("appointment") || "[]"));
  }, []);

  // console.log(infoAppoint);

  const store = {
    currentAccount,
    setCurrentAccount,
    infoAppoint,
    setInfoAppoint,
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}
