import { useParams,useNavigate } from "react-router-dom";


const ProductDetailPage = (props) => {
  const {products} = props;
  // console.log(products);

  const {productId}= useParams();
  // console.log(productId); //  '3'

  // 퀴즈
  // targetProduct 변수에 productId에 해당하는 상품 객체를 저장
  // 힌트 filter()
  const [targetProduct] = products.filter((obj) => obj.id == Number(productId));
    console.log(targetProduct)
    console.log(targetProduct.name);

  const navigate = useNavigate();

  if (!targetProduct) {
    return <main className="ProductDetailPage">존재하지 않는 상품입니다.</main>
  }

    return (
      <main className="ProductDetailPage">
        <h1>여기는 상품 디테일 페이지!</h1>
        <button onClick={() => navigate(-1)}>목록보기</button>
        <button onClick={() => navigate('/')}>홈으로 이동하기</button>
        <ul>
          {/* <li>판매 번호:{targetProduct.id}</li>
          <li>상품명:{targetProduct.name}</li>
          <li>판매자:{targetProduct.email}</li>
          <li>상세 설명:{targetProduct.body}</li> */}
          <li>판매번호:{targetProduct.id}</li>
          <li>상품명:{targetProduct.title}</li>
          <li><img src={targetProduct.url} className="image"/></li>
        </ul>
      </main>
    );
  };
  
  export default ProductDetailPage;