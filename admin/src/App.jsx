import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.styles.scss";
// import { Route, Router, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import Header from "./component/Header/Header"
import Register from "./Pages/Register/Register";
import CreateRoom from "./CreateRoom";
import Dashboard from "./Pages/Dashboard/Dashboard";


const App = () => {
  return (
      <div>
    <Router>
        <Header/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/> } />
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/createRoom" element={<CreateRoom />} />
        </Routes>
    </Router>
      </div>
          
  )
}

export default App




