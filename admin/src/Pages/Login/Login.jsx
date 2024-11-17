// import { reset } from "nodemon";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser,reset } from "../../feature/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {user,isSuccess } = useSelector((state)=> state.auth);
  const [formData,setFormData] = useState({
    email: "",
    password:""
  });

  // State to hold form input values
  

  const { email, password } = formData;

  useEffect(()=>{
    if (isSuccess) {
      navigate("/dashboard");
      dispatch(reset());
    }
  },[isSuccess,user,dispatch,navigate])

  // Function to handle changes in the input fields
  const handleChange = (e) => {
    setFormData((prevState) =>({
      ...prevState,
      [e.target.name] : e.target.value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSubmit = {
      email,
      password,
    };

    dispatch(loginUser(dataToSubmit));
     // Prevent the default form submission behavior
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container">
      <h1 className="heading center">Login</h1>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>      
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>
          
          <button type="submit">Login Now</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
