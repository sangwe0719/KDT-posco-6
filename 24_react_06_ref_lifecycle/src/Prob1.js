import { useState } from 'react';
import { useRef } from 'react';

const Prob2 = () => {
  const [inputWriter, setInputWriter] = useState(''); // 작성자 input state
  const [inputTitle, setInputTitle] = useState(''); // 제목 input state
  const [comment, setComment] = useState([
    { 
      id: 1,
      writer: '민수',
      title: '안뇽',
    },
    {
      id: 2,
      writer: '지민',
      title: '하이하이',
    },
    { id: 3,
      writer: '희수',
      title: '멋쟁이',
    },
  ]); // 댓글 목록 배열 state
  const [isExist, setIsExist] = useState(false);

  const InputRef1 = useRef();
  const InputRef2 = useRef();

    // Input 빈값 여부 검사
    //const checkInputValue = () => {
    // writer input, title input 중에서 빈값이 있으면 input focusing
    //if (inputWriter.trim().length === 0 ){
    //InputRef1.current.focus();
    // return false;
    //} else if (inputTitle.trim().length === 0) {
    //  InputRef2.current.focus();
    // return false;
    // }else {
    //  return true;
 // }
  const addComment = () => {

    const newComment = comment.concat({
      id: comment.length + 1,
      writer: inputWriter,
      title: inputTitle
    });
    
    if (inputWriter.trim().length === 0 ){
        InputRef1.current.focus();
        return;
    } else if (inputTitle.trim().length === 0) {
        InputRef2.current.focus();
        return;
    }else {
        
    // ver1. concat()
    //const newComment = comment.concat(newData); // input에 작성한 값을 추가한 새로운 배열
    //setComment(newComment);

    // ver2. spread(...)연산자
    //const newComment = [...comment, newData]

    setComment(newComment);
    setInputWriter('');
    setInputTitle('');
    // TODO: state 추가
    // TODO: input 초기화
    console.log(InputRef1);
    console.log(InputRef2);
    }

    InputRef1.current.focus();
  };

  const activeEnter = (e) => {
    if (e.key === 'Enter') {
        addComment();
    }
  }

  const writerInputOnChange = (e) => {
    setInputWriter(e.target.value)
    setIsExist(true)
  }
  return (
    <div>
      <form>
        <label htmlFor="writer">작성자:</label>
        <input
          id="writer"
          type="text"
          name="writer"
          value={inputWriter}
          onChange={writerInputOnChange }
          onKeyDown={(e) => activeEnter(e)}
          ref={InputRef1}
          autoFocus
          className = {isExist ? 'isExist' : ''}
        />
        <label htmlFor="title">제목:</label>
        <input
          id="title"
          type="text"
          name="title"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
          onKeyDown={(e) => activeEnter(e)}
          ref={InputRef2}
        />
        <button type="button" onClick={addComment}>
          작성
        </button>
      </form>

      <table border={1} style={{ margin: '30px auto', width: '500px' }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {comment.map((obj) => (
          <tr key= {obj.id}>
            <td>{obj.id}</td>
            <td>{obj.title}</td>
            <td>{obj.writer}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Prob2;