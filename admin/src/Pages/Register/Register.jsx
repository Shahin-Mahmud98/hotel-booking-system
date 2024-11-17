import { useEffect, useState } from "react";
import { registerUser,reset  } from "../../feature/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';


const Register = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {user , isSuccess} = useSelector((state)=>state.auth);

  // State to hold form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const { name, email, password } = formData;

  useEffect(()=>{
    if (isSuccess) {
      navigate("/login");
      dispatch(reset());
    }

  },
  [isSuccess,user,dispatch,navigate]
);


  const handleChange = (e) => {
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name] : e.target.value,
    }))
  }


  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); 
    const dataToSubmit = {
      name,
      email,
      password,
    };

    dispatch(registerUser(dataToSubmit));
    // Prevent the default form submission behavior
    // console.log('Form submitted:', formData);
  };

  return (
    <div className="container">
      <h1 className="heading center">Register</h1>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </div>
          
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
          
          <button type="submit">Register Now</button>
        </form>
      </div>
    </div>
  );
};

export default Register;


// import { useState } from "react";
// import { registerUser, reset } from "../../feature/auth/authSlice";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";

// const Register = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { user, isSuccess } = useSelector((state) => state.auth);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const { name, email, password } = formData;

//   useEffect(() => {
//     if (isSuccess) {
//       navigate("/login");
//       dispatch(reset());
//     }
//   }, [isSuccess, user, dispatch, navigate]);

//   const handleChange = (e) => {
//     setFormData((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const dataToSubmit = {
//       name,
//       email,
//       password,
//     };

//     dispatch(registerUser(dataToSubmit));
//   };
//   return (
//     <div className="container">
//       <h1 className="heading center">Register</h1>

//       <div className="form-wrapper">
//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               placeholder="Enter your name"
//               name="name"
//               value={name}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="input-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your Email"
//               value={email}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="input-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter password"
//               value={password}
//               onChange={handleChange}
//             />
//           </div>

//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;