
export const Initial = () => {
  let cnt=0;

  return (
    <div>{cnt}
    <button onClick={() => cnt++}>Increment</button>
    </div>
  )
}
