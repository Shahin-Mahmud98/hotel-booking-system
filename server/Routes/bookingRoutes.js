const {Router } = require("express");
const { getBooking, createBooking, updateBooking, singleBooking, deleteBooking } = require("../controllers/bookingController");
const { auth } = require("../middleware/authMiddleware");


const router = Router();


////starting point routes: prothome eta dhore check korte hobe

//  router.get("/",(req,res)=>{
//     return res.json({messsage:"get all new booking"})
// });
router.get("/",auth, getBooking);
router.post("/",createBooking);
router.get("/:id",singleBooking);
router.patch("/:id",auth,updateBooking);
router.delete("/:id",auth,deleteBooking);

module.exports = router;