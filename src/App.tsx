import {CounterContainer} from "./components/CounterContainer/CounterContainer";
import CounterButton from "./components/CounterButton/CounterButton";
import { CounterValue } from "./components/CounterValue/CounterValue";

function App() {
  return (
    <div className="App">
      <CounterContainer>
        <CounterButton title="-1" handleCounter={() => console.log(55)} />
        <CounterValue>{10}</CounterValue>
        <CounterButton title="+1" handleCounter={()=>console.log(55)} />
       </CounterContainer>
    </div>
  );
}

export default App;
