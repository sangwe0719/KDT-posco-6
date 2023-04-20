import { useState  } from "react";

function Practice2Component(){
    const [text,Settext] = useState("");
    const [color, Setcolor] = useState("white");
    const black =()=> {
        Settext("검은색 입니다")
        Setcolor("black");
    }
    const red =()=> {
        Settext("빨간색 입니다")
        Setcolor("red");
    }
    const blue =()=> {
        Settext("파란색 입니다")
        Setcolor("blue");
    }

    return(
        <div>
            <h3 style={{color}}>{text}</h3>
            <button onClick = {black}>검은색</button>
            <button onClick = {red} >빨간색</button>
            <button onClick= {blue}>파란색</button>
        </div>
    );
}

export default Practice2Component;