const Booking = require("../models/bookingModel");



//get all booking here
const getBooking = async(req,res,next) => {
    try {
        const bookings = await Booking.find().populate("roomId");
        if (!bookings) {
            res.status(400);
            throw new Error("Can Not Find Booking")
        }
        return res.status(200).json(bookings);
    } catch (error) {
        next(error);
    }
}


//create all booking here 
const createBooking = async(req,res,next) => {
    try {
        const bookingCreate = await Booking.create(req.body);
        if (!bookingCreate) {
            res.status(400);
            throw new Error("Can Not create Booking")
        }
        return res.status(200).json(bookingCreate);
    } catch (error) {
        next(error);
    }
}

//get Single Booking
const singleBooking = async(req,res,next) => {
    try {
        const bookingSingle = await Booking.findById(req.params.id).populate("roomId");
        if (!bookingSingle) {
            res.status(400);
            throw new Error("Can Not find single Booking")
        }
        return res.status(200).json(bookingSingle);
    } catch (error) {
        next(error);
    }
};


//Update All Booking Here 
const updateBooking = async(req,res,next) => {
    try {
        const bookingUpdate = await Booking.findByIdAndUpdate(req.params.id,
            {
            $set:req.body,
        },
        {
            new:true,
        }
    );
        if (!bookingUpdate) {
            res.status(400);
            throw new Error("Can Not Update Booking")
        }
        return res.status(200).json(bookingUpdate);
    } catch (error) {
        next(error);
    }
}


// deleteBooking
const deleteBooking = async(req,res,next)=>{
    try {
      const bookingDelete = await Booking.findByIdAndDelete(req.params.id);
      if (!bookingDelete) {
        res.status(400);
        throw new Error("room not deleted");
      }
      return res.status(200).json({id:req.params.id});
    } catch (error) {
      next(error);
    }
  };



module.exports = {
    getBooking,
    createBooking,
    singleBooking,
    updateBooking,
    deleteBooking,
}