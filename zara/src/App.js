import Home from "./Main/Home"
import './App.css';
import LoginMain from "./Main/LoginMain";
import Cart from "./Main/Cart";
import {Routes,Route} from "react-router-dom";
import Register from "./day3/Register";
import Collection from "./day4/Collection";
import Man from "./day4/Man";
import Shoes from "./day4/Shoes";
import Women from "./day4/Women";

function App() {
  return (
    <div className="App">
     <Routes>
              <Route path="/" element={<Home/>}></Route>
                <Route path="/login" element={<LoginMain/>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
                <Route path="/register" element={<Register/>}></Route>

                <Route path="/collection" element={<Collection/>}></Route>
                <Route path="/men" element={<Man/>}></Route>
                <Route path="/shoes" element={<Shoes/>}></Route>
                <Route path="/women" element={<Women/>}></Route>
            </Routes>
    </div>
  );
}

export default App;
