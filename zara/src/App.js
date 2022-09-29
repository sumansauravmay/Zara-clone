import Home from "./Main/Home"
import './App.css';
import LoginMain from "./Main/LoginMain";
import Cart from "./Main/Cart";
import {Routes,Route} from "react-router-dom";
import Register from "./day3/Register";

function App() {
  return (
    <div className="App">
     <Routes>
              <Route path="/" element={<Home/>}></Route>
                <Route path="/login" element={<LoginMain/>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
            </Routes>
    </div>
  );
}

export default App;
