import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";

import SignUp from "./Signup";

import "bootstrap/dist/css/bootstrap.min.css";


function App() {
 return (
   <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/Login" element={<Login/>} />
     <Route path="/SignUp" element={<SignUp/>} />
   </Routes>
 );
}


export default App;

