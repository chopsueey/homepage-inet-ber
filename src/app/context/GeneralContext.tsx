"use client";

import {
  Dispatch,
  ReactElement,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type IInitialContext = [boolean | undefined, Dispatch<SetStateAction<boolean>>];

const InitialContext = createContext<IInitialContext>([undefined, () => null]);

type SharedData = [boolean, Dispatch<SetStateAction<boolean>>];

type ChildrenType = {
    children?: ReactElement | ReactElement[] | undefined
}

export function GeneralContext({ children }: ChildrenType): ReactElement {
  const [darkMode, setDarkMode] = useState(true);

  const sharedData: SharedData = [darkMode, setDarkMode];

  return (
    <InitialContext.Provider value={sharedData}>
      {children}
    </InitialContext.Provider>
  );
}

const GeneralStore = () => useContext(InitialContext);

export default GeneralStore;
