//실습 1
import "../src/app.css";

function App() {


    const name ="로이"
    const animal = "강아지"

    const a = 2;
    const b = 1;
  return <>
    <div>
    "이것은 div입니다"<h3>이것은 div 안에 있는 h3태그 입니다</h3>
  </div>
  <h2>제 반려 동물의 이름은 <span style={{textDecoration: "underline"}}>로이</span>입니다.</h2>
  <h2><span style={{textDecoration: "underline"}}>로이</span>는 <span style={{textDecoration: "underline"}}>강아지</span>입니다.</h2>
  <div>{ 3 + 5 === 8 ?  <h3>"맞았습니다!"</h3> : <h3>"틀렸습니다!"</h3>}</div>
  <div>{ a > b ? <h3>"a 가 b보다 큽니다"</h3> : <h3>"a 가 b보다 크지 않습니다 "</h3>}</div>
  <div className="test" style ={{
    backgroundColor: "orange",
    color: "black",
    width: "500px",
    fontSize: "40px",
    margin: "0 100px",
    textAlign: "center"
  }}> Hello world</div>
  <div className="text" style ={{
    textAlign: "center",
    marginTop: "10px 20px"
  }}>
  <label>아이디:</label>
  <input type="text" ></input>
  <br/>
  <br/>
  <label>비밀번호:</label>
  <input type="text"></input>
  </div>
  <div className="rainbow" style={{
    display: "flex",
  }}>
        <div className="red"></div>
        <div className="orange"></div>
        <div className="yellow"></div>
        <div className="green"></div>
        <div className="blue"></div>
        <div className="navy"></div>
        <div className="purple"></div>
      </div>
  </>

};

export default App;
