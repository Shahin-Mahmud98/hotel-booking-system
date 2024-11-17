import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"

const Dashboard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {user} = useSelector((state) => state.auth);

    // const {isSuccess} = useSelector((state)=>state)

    // useEffect(()=>{
    //     if (isSuccess) {
    //         dispatch(reset());
    //     }
    // },[])
useEffect(()=>{
    if (!user) {
        navigate("/login")
    }
},[user]);
    
  return (
    <div className="heading center">
      Dashboard
    </div>
  )
}

export default Dashboard
