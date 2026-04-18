import D from "./component1/D"
import E from "./component1/E"
import { CountProvider } from "./context/CountContext"
import { Initial } from "./storeType/Initial"
import PropsDrilling from "./storeType/PropsDrilling"
import Redux from "./storeType/Redux"
import SimpleState from "./storeType/SimpleState"

const App = () => {
  return (
    <div className="App">
      {/* <h1>Hello, World!</h1>
      <Initial/>
      <SimpleState/>
      <PropsDrilling/> */}
      {/* <CountProvider>
      <E />
    </CountProvider> */}
    <Redux/>

    </div>
  )
}

export default App