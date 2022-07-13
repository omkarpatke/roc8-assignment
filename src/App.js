import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { useProducts } from './context/productContext';



function App() {
  const { data } = useProducts();

  return (
    <div className="App">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <div className="productlisting">
        {data && data.map((product) => (
              <div className="product" key={product._id}>
                <i className='lni lni-heart' id="product-wishlist-icon"></i>
                <div to={`/products/${product._id}`}><img className="product-img" src={product.img} alt="cycle-img"/></div>
                <div className="product-desc">{product.desc}</div>
                <div className="product-price">MRP: ₹{product.price} <span className='product-rating'>{product.rating}  <i className="lni lni-star-filled"></i></span></div>
                <div className="product-links">
                    <div className="product-btn" to={`/products/${product._id}`}>KNOW MORE</div>
                     <button className="product-btn" >Add To Cart</button>
                    
                </div>
              </div>
            ))} 
        </div>
      </div>
    </div>
  );
}

export default App;
