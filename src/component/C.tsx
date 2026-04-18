
const C = ({count, setCount}:any) => {
  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}

export default C