import { useParams,useNavigate } from "react-router-dom";

const Codingon = () => {

    const navigate = useNavigate();

    return (
        <>
        <div className="Student">
        <div>학생의 이름은 <span className="sean">codingon</span>입니다.
        <br/>
        <button onClick={() => navigate(-1)}>이전페이지로</button>
        </div>
        </div>
        </>
    )
}

export default Codingon;