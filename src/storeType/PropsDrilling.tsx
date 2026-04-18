import { useState } from "react";
import A from "../component/A";


const PropsDrilling = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
        <A count={count} setCount={setCount}/>
    </div>
  )
}

export default PropsDrilling;

// Props-Drilling - > A -> B -> C ;