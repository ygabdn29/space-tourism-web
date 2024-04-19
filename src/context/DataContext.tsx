import { ReactNode, createContext } from "react";
import data from "../../data/data.json";

interface DataContext {
  getDestination: () => any[]; // eslint-disable-line
  getCrew: () => any[]; // eslint-disable-line
  getTechnology: () => any[]; // eslint-disable-line
}

interface DataContextChildren {
  children: ReactNode;
}

const DataContext = createContext<DataContext | null>(null);

function DataContextProvider({ children }: DataContextChildren) {
  function getDestination() {
    const destination = data.destinations;

    return destination;
  }

  function getCrew() {
    const crew = data.crew;

    return crew;
  }

  function getTechnology() {
    const technology = data.technology;

    return technology;
  }

  return (
    <DataContext.Provider value={{ getDestination, getCrew, getTechnology }}>
      {children}
    </DataContext.Provider>
  );
}

export { DataContextProvider, DataContext };
