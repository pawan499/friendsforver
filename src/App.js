import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddAccount from "./components/AddAccount";
import Chatpage from "./components/Chatpage";

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route  path="/" Component={Home}/>
          <Route path="/register"  Component={AddAccount}/>
          <Route path="/chatpage"   Component={Chatpage}/>
        </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App;
