
function FunctionComponent({name,animal}) {

    return (
      <div>
        <h3>제 반려 동물의 이름은 <span style={{textDecoration: 'underline'}}>{name}</span>입니다.</h3>
        <h3><span style={{textDecoration: 'underline'}}>{name}</span>는 <span style={{textDecoration: 'underline'}}>{animal}</span>입니다.</h3>
      </div>
    );
  }

  export default FunctionComponent;
