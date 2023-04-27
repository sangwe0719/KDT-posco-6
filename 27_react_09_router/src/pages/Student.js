import { useParams,useNavigate } from "react-router-dom";

const Student = () => {

    const navigate = useNavigate();

    return(
        <div className="Student">
        <div>학생의 이름은 <span className="sean">sean</span>입니다.
        <br/>
        <button onClick={() => navigate(-1)}>이전페이지로</button>
        </div>
        </div>
    )
}

export default Student;