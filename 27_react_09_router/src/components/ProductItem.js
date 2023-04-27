import {Link} from 'react-router-dom';

const ProductItem = (props) => {
    const {product} = props;
    
    return (
    <Link to={'/products/' + product.id}>
        <ul className="ProductItem">
        {/* <li>상품명: {product.name}</li>
        <li>상세설명: {product.body.slice(0,80)}...</li> */}
        <li>id:{product.id}</li>
        <li>title:{product.title}</li>
        <li><img src= {product.thumbnailUrl}/></li>
    </ul>
    </Link>
    );
}

export default ProductItem;