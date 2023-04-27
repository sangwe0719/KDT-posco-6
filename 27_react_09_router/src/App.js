import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/Common.scss';
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFound from "./pages/NotFound";
import { useEffect,useState } from "react";
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/comments'
      );

      setProducts(res.data.slice(0, 10));
    };

    getProducts();
  },[])

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/products" element={<ProductPage products={products}/>}/>
          <Route path="/products/:productId" element={<ProductDetailPage products={products}/>}/>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
