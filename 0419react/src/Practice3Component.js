import { useState } from "react";

function Practice3Component() {
    const [visible, setvisible] = useState(true); // -> true

    const toggle = () => {
       setvisible(!visible);
       // !true => false
       // !false => true
    };

    return(
        <div>
            <button onClick={toggle}>{visible ? '사라져라':'보여라'}</button>
            <h3>{visible && '안녕하세요'}</h3>
        </div>
    )
}

export default Practice3Component;

