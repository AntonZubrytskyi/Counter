import {CounterContainer} from "./components/CounterContainer/CounterContainer";
import CounterButton from "./components/CounterButton/CounterButton";
import { CounterValue } from "./components/CounterValue/CounterValue";
import {increment, decrement} from "./redux/counterReducer";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { useAppSelector} from "./hooks/useAppSelector";

const App = () => {

  const count = useAppSelector(state => state.counter.count);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <CounterContainer>
        <CounterButton title="+1" handleCounter={() => dispatch(increment())} />
        <CounterValue>{count}</CounterValue>
        <CounterButton title="-1" handleCounter={() => dispatch(decrement())} />
       </CounterContainer>
    </div>
  );
}

export default App;
