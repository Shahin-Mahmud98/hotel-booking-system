import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createRoom, reset } from "./feature/room/roomSlice";
import { upLoadImage } from "./Pages/helper/utils";
// import { cloudinary_js_config } from "../../server/config/cloudinary";

//create room
const CreateRoom = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { isSuccess } = useSelector((state) => state.room);

  //images upload file
  const [files, setFiles] = useState("");

  const [formData, setFormData] = useState({
    name: "test",
    price: 222,
    desc: "dfsdfasdm",
    roomNumbers: "40,42,242,22",
  });

  const { name, price, desc, roomNumbers } = formData;

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
      navigate("http://localhost:5000/api/create");
    }
  }, [isSuccess, dispatch, navigate]);

  //cloduinary
  // const image = async decoded.image;
  // if (image) {
  //   const response = await cloudinary_js_config.uploader.upload(image,{
  //     folder:'hotelbooking'

  //   });
  //   decoded.image = response.secure_url;
  // }
  // await User.create(decoded)

  // ------------------------
  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //images field to handleFileChange
  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  //handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !price || !roomNumbers) {
      return;
    }

    const roomArray = roomNumbers.split(",").map((item) => {
      return {
        number: parseInt(item),
        unavailableDates: [],
      };
    });

    let list = [];

    // list = await Promise.all(
    //   Object.values(files).map(async (file) => {
    //     const url = await upLoadImage(file);
    //     return url;
    //   })
    // );
    console.log(roomArray);

    const formData = new FormData(e.currentTarget);
    formData.append("roomNumber", roomArray);

    const res = await fetch("http://localhost:5000/api/rooms", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    console.log(data);

    const dataToSubmit = {
      name,
      price,
      desc,
      roomNumbers: roomArray,
      img: list,
    };

    dispatch(createRoom(dataToSubmit));
  };

  //dispatch createRoom function

  // let dataTosubmit = {name, price, desc, roomNumbers, img};

  return (
    <div className="container">
      <h1 className="heading center">Create Room</h1>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Enter room name"
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              value={price}
              placeholder="Enter room price"
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="desc">Description</label>
            <textarea
              name="desc"
              value={desc}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="input-group">
            <label htmlFor="desc">Room Numbers</label>
            <textarea
              name="roomNumber"
              value={roomNumbers}
              placeholder="Enter room numbers separated by commas eg:202,203,204,205"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="input-group">
            <label htmlFor="name">Images</label>
            <input
              type="file"
              name="file"
              multiple
              onChange={handleFileChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateRoom;

// const CreateRoom = () => {
//   return (
//     <div>
//       <h1 className="heading center">Create Room</h1>
//     </div>
//   )
// }

// export default CreateRoom
