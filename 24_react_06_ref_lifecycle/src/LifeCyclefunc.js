import {useState} from 'react';
import LifeCyclefuncChild from "./LifeCyclefuncChild";
// 부모 컴포넌트
const LifeCyclefunc = () => {
    const[number, setNumber] = useState(5);
    const[visible, setVisible] = useState(true);

    const changeNumber = () => {
        setNumber(number + 1);
    }

    const changeVisible = () => {
        setVisible(!visible);
    }

    return (
        <>
            <button onClick={changeNumber}>PLUS</button>
            <button onClick={changeVisible}>ON/OFF</button>
            {visible && <LifeCyclefuncChild number={number}/>}
        </>
    )
}

export default LifeCyclefunc;  