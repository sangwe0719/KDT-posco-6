import { useState } from "react";

function FunctionComponent() {
    //const list = 'abc'
    // const [counter, setCounter] = useState(0);
    // console.log(counter);
    // //console.log(props);
    // //props = {name:"둘리", age: "400"}
    // const onClick = () => {
    //   setCounter(counter + 1);
    //   console.log('클릭되었습니다');
    // };

    const [message,fix] = useState("");
    const entry = () => {
        fix("입장하였습니다.");
    };

    const exit = () => {
        fix("퇴장하였습니다.");
    };

    const [bool,setbool] = useState(false);
    const Select = () => {
        setbool(true);
    }

    return (
      <div>
        <h1>Hello World, Function Component</h1>
        {/* <h5>{counter}</h5>
        <button onClick={onClick}>숫자업</button> */}
        <br/>
        <button onClick ={entry}>입장</button>
        <button onClick ={exit}>퇴장</button>
        <h1>{message}</h1>
        <buttom onClick = {Select}>선택</buttom>

        {/* <h5>{name}</h5>
        <h5>{age}</h5> */}
      </div>
    );
  }
  
  
  
  
  
  
  
  
  
  

export default FunctionComponent;