import React from 'react'

const SimpleState = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>{count}
    <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default SimpleState