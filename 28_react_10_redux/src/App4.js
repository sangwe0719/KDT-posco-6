import { useSelector, useDispatch } from 'react-redux';
import { Box1Container, Box2Container, Box3Container   } from './containers/BoxesContainer';
import './styles/Box.css';

function App() {
  // useSelector() hook
  // : redux store의 state를 조회
  // - 인자로 콜백함수
  // - 콜백함수의 매개변수로 state를 받을 수 있음
  const number = useSelector((state) => {
    console.log(state); // { counter : { number: 9 } }
    return state.counter.number;
  });

  return (
    <div className="App">
      Redux Test
      <h1>number</h1>
      <Box1Container />
    </div>
  );
}

export const Box1 = () => {
  return (
    <div className="Box">
      <h2>Box1</h2>
      <Box2Container />
    </div>
  );
};

export const Box2 = () => {
  return (
    <div className="Box">
      <h2>Box2 </h2>
      <Box3Container />
    </div>
  );
};

export const Box3 = ({number,onIncrease, onDecrease}) => {

  return (
    <div className="Box">
      <h2>Box3: {number}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <button>CHANGE</button>
    </div>
  );
};

export default App;