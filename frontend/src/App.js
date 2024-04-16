import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/shop';
import ShopCategory from './Pages/ShopCategory';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import { Footer } from './Components/Footer/Footer';
import ring_banner from'./Components/Assests/banner_ring.png'
import earring_banner from './Components/Assests/banner_earrings.png'
import chain_banner from './Components/Assests/banner_chains.png'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path ="/" element={<Shop></Shop>}></Route>
        <Route path ="/rings"element ={<ShopCategory banner ={ring_banner}category="ring"></ShopCategory>}></Route>
        <Route path ="/earrings"element ={<ShopCategory banner ={earring_banner}category="earring"/>}></Route>
        <Route path ="/necklace"element ={<ShopCategory banner ={chain_banner} category="ring"/>}></Route>
        <Route path = "/product"element ={<Product></Product>}>
          <Route path=':productId'element = {<Product></Product>}></Route>
        </Route>
        <Route path = "/cart" element={<Cart></Cart>}></Route>
        <Route path ="/login"element ={<LoginSignup></LoginSignup>}></Route>

      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
