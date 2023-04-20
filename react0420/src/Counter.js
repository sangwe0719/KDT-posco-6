import { useState } from 'react';

const Counter = () => {
    const [number, setnumber] = useState(0);
  const increase = () => {
    setnumber(number + 1);
  };

  const alertMsg = (msg) => {
    alert(`${msg} 현재숫자는 ${number} 입니다!!` )
  }

  const consoleMsg = (e,msg) => {
    console.log(e.target);
    alert(`${msg} 현재숫자는 ${number} 입니다!!` )
  }

  return (
    <>
      <div>숫자 카운터</div>
      <h1>{number}</h1>

    {/*함수형 컴포넌트에서의 이벤트 */}
    {/*1.인자가 없는 경우, 함수 이름만 전달 */}
      <button onClick={increase}>더하기</button>
      <button onClick={() => alertMsg('helloooooo~')}>alert 띄우기</button>
      <button onClick={(e) => consoleMsg(e,'helloooooo~')}>console 출력</button>
    </>
  );
};

export default Counter;