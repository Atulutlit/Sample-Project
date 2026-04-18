import { useContext } from "react";
import { CountContext } from "./../context/CountContext";

export default function D() {
  const { count, increment }:any = useContext(CountContext);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
}