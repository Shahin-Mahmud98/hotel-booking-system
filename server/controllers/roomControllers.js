const Room = require("../models/roomModel")


//get all rooms
const getRooms = async (req,res) => {
    try {
    const rooms = await Room.find();
    if (!rooms) {
        res.status(400);
        throw new Error("rooms not found");
    }
    return res.status(200).json(rooms);
} catch (error) {
    next(error);
}
};

//create rooms
// create room
const createRoom = async (req, res, next) => {
    try {
      /*todo validate data from  user with joi*/
      const room = await Room.create(req.body);
  
      if (!room) {
        res.status(400);
        throw new Error("there was a problem creating");
      }
      const rooms = await Room.find();
      return res.status(201).json(rooms);
    } catch (error) {
      next(error);
    }
  };

  //single get rooms
  const getRoom = async(req,res,next)=>{
    try {
      const room = await Room.findById(req.params.id);
      if (!room) {
        res.status(400);
        throw new Error("room not found");
      }
      return res.status(200).json(room)
    } catch (error) {
      next(error)
    }
  };


  //update rooms
  const updateRoom = async(req,res,next)=>{
    try {
      const updateRoom = await Room.findByIdAndUpdate(req.params.id,{
        $set:req.body,

      },
      {
        new:true
      }
    );
    if (!updateRoom) {
      res.status(400);
      throw new Error("Can not Update Room");
    }
    // return res.status(200).json({id: req.params.id});
    return res.status(200).json(updateRoom);
    } catch (error) {
      next(error)
    }
  }

  //deleted rooms
  const deleteRoom = async(req,res)=>{
    try {
      const deleteRoom = await Room.findByIdAndDelete(req.params.id);
      if (!deleteRoom) {
        res.status(400);
        throw new Error("room not deleted");
      }
      return res.status(200).json({id:req.params.id});
    } catch (error) {
      next(error)
    }
  }

module.exports = {
    getRooms,
    createRoom,
    getRoom,
    updateRoom,
    deleteRoom
}