import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/Common.scss';
import './styles/Practice.scss';
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFound from "./pages/NotFound";
import { useEffect,useState } from "react";
import axios from 'axios';
// import PracticeHeader from "./pages/PracticeHeader"
// import Student from "./pages/Student";
// import Codingon from "./pages/Codingon";
// import SearchParams from "./pages/SearchParams";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/photos'
      );

      setProducts(res.data.slice(0, 10));
    };

    getProducts();
  },[])

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
       {/* <Routes>
          <Route path="/" element={<PracticeHeader/>}/>
          <Route path="/student/sean" element={<Student/>}/>
          <Route path="/student/codingon" element={<Codingon/>}/>
          <Route path="/student/new" element={<SearchParams/>}/>
        </Routes> */}
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
