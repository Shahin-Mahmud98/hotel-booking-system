const {Router } = require("express");
const { getRooms, createRoom,getRoom, updateRoom, deleteRoom } = require("../controllers/roomControllers");
const { auth } = require("../middleware/authMiddleware");

const router = Router();


//starting point routes: prothome eta dhore check korte hobe

// router.get("/",(req,res)=>{
//     return res.json({messsage:"get all new rooms"})
// });

//routing start:
//get all rooms here
router.get("/",getRooms
);

//create rooms here
router.post("/",auth, createRoom);

//get single room
router.get("/:id",getRoom);


//Update Rooms
router.patch("/:id",auth,updateRoom);

//Deleted Room
router.delete("/:id",auth,deleteRoom);
//Route ti create a new room


module.exports = router;


