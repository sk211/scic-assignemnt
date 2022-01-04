import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import Cart from './Components/Cart/Cart';
import Shop from './Components/Shop/Shop';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/cart" element={<Cart />}>
     </Route>
      <Route path="/shop" element={<Shop />}>
     </Route>
    </Routes>
  </BrowserRouter>
     
    </div>
  );
}

export default App;
