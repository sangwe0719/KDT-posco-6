import { useState } from "react";

function Practice3Component() {
    const [text, setText] = useState(''); // -> 안녕하세요
    const [isVisible, setIsVisible] = useState(false); // -> true

    const [display,setdisplay] = useState("block");
    // const [text,settext] = useState("");
    const disapear = () => {
        if( display == "block" ){
            setdisplay("none");
            setIsVisible("보여라")

        } else {
            setText("안녕하세요");
            setdisplay("block")
            setIsVisible("사라져라")
        }
    }
    return(
        <div>
            <button onClick={disapear}>{isVisible}</button>
            <h3 style={{display : display}}>{text}</h3>
        </div>
    )
}

export default Practice3Component;

