import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function useData() {
  const contextValue = useContext(DataContext);

  if (!contextValue) {
    throw new Error("DataContext was used outside of DataProvider");
  }

  return contextValue;
}
