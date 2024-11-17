import { useDispatch, useSelector } from "react-redux";
import "./header.styles.scss";
import { Link } from "react-router-dom"
import { logoutUser,reset } from "../../feature/auth/authSlice";



const Header = () => {
  const {user} = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    dispatch(logoutUser());
    dispatch((reset));
  }
  return (
    <div>
    <header className="main-header">
    <div className="container">
    <Link>
    <h1 className="logo">Logo</h1>
    </Link>
    <nav>
      <Link to="/rooms" >Rooms</Link>
      {user ? (
         <>
         <Link to="/dashboard">Dashboard</Link>
        <Link to="/CreateRoom" >Create</Link>
        <button onClick={handleLogout} >Logout</button>
      </>
      ) : (
        <>
        <Link to="/login" >Login</Link>
        <Link to="/register" >Register</Link>
        
        </>
      )
      }
    </nav>
    </div>
    </header>
    </div>
  )
}

export default Header
