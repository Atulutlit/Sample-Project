const C = ({ count, setCount }: any) => {
  return (
    <>
      <h1>this is going to be the heading</h1>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};

export default C;
