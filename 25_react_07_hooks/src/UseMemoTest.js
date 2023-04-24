import {useState, useMemo} from 'react';

// 평균값 계산 함수
// 숫자를 [등록] 버튼을 클릭할 때 뿐만 아니라
// input 내용을 수정할 때도 getAverage 함수가 호출되고 있음
const getAverage = (numbers) => {
    // numbers: 숫자 저장하고 있는 배열
    console.log('평균값 계산 중...!');

    // numbers 배열에 원소가 없다면 평균값은 0을 반환
    if (numbers.length === 0) return 0;

    // numbers 배열에 원소를 모두 더함
    const sum = numbers.reduce((a,b) => a + b);

    // 평균값을 계산하며 반환
    return sum / numbers.length;
}

const UseMemoTest = () => {
    const [number, setNumber] = useState(0);
    const [list, setList] = useState([]);


    const onchange = (e) => {
        setNumber(e.target.value);
    };

    const onInsert = () => {
        const newList = list.concat(parseInt(number));
        setList(newList);
        setNumber('');
    };

    // [after]
    const avg = useMemo(() => {
        return getAverage(list);
    },[list]);

    return (
        <>
            <h1>useMemo hook</h1>

            <input type="number" value={number} onChange={onchange}/>
            <button onClick={onInsert}>등록</button>

            <ul>
            {list.map((li, idx) => {
            return <li key={idx}>{li}</li>;
            })}
            </ul>

            {/* <h2>평균값 : {getAverage(list)}</h2> */}
            <h2>평균값 : {avg}</h2>
        </>
    )
};

export default UseMemoTest;

// useMemo() 요약
// "수행한 연산의 결과 값을 기억" 함으로써 계산을 최소화함