const dotenv = require('dotenv').config();
const express = require('express');
const cors = require("cors");
// const bodyParser = require("body-parser")
const app = express();
const connectDB = require("./config/db");
const {errorHandler} = require("./middleware/errorHandler");
const roomRoutes = require("./Routes/roomRoutes")
const bookingRoutes = require("./Routes/bookingRoutes");
const userRoutes = require("./Routes/userRoutes");
const cookieParser = require("cookie-parser");
const { auth } = require('./middleware/authMiddleware');


const port = process.env.PORT || 5000;

//connected to database
connectDB();


// var adminRoute = require('./Routes/adminRoutes');

// app.use('/api', adminRoute);

//setup middleware 
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// app.get("/",(req,res)=>{
//     res.send("messeage: url");
// })

//setup routes
app.use("/auth",auth);
app.use("/api/rooms", roomRoutes)
app.use("/api/bookings",bookingRoutes)
app.use("/api/users",userRoutes);


//cloudinary


//cloudinary end

// app.use(bodyParser.urlencoded({ extended: true }));

//middleware : errorHandler
app.use(errorHandler);

app.listen(port,() =>{
    console.log(`Listening on Port ${port}`)

});

 


