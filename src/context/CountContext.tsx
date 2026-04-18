import { createContext, useState } from "react";

export const CountContext = createContext({});

export const CountProvider = ({ children }:any) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <CountContext.Provider value={{ count, increment }}>
      {children}
    </CountContext.Provider>
  );
};