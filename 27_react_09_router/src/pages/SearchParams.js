import { useParams,useNavigate } from "react-router-dom";

const SearchParams = () => {

    const navigate = useNavigate();

    return (
        <div className="Student">
        <div>학생의 이름은 <span className="sean">new</span>입니다.
        <br/>
        실제 이름은 <span className="jisu">"jisu"</span>입니다.
        <br/>
        <button onClick={() => navigate(-1)}>이전페이지로</button>
        </div>
        </div>
    )
}

export default SearchParams;