import { useState } from 'react';

function Example() {

    const [state, setstate] = useState("Hello World!");
    const click = () => {
        setstate("Goodbye World");
    };
        
    return (
            <div>
            <h1>{state}</h1>
            <button onClick={click}>클릭</button>
            </div>
        ) 
};

export default Example;