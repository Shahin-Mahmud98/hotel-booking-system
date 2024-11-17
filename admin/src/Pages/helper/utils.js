// upload image to cloudinary

// upload images


export const upLoadImage = async (file) => {
    if (!file) {
        throw new Error("No file provided")
    }
    const formData = new FormData ();
    formData.append("file",file[0]);
    // eslint-disable-next-line no-undef
    formData.append("upload_preset", process.env.VITE_UPLOAD_PRESET);
    // eslint-disable-next-line no-undef
    const cloudName = process.env.VITE_CLOUD_NAME;
    console.log(cloudName);
    const url = `http://localhost:5000/api/rooms`;

    // console.log('React API',import.meta.env.REACT_APP_CLOUD_NAME);


    const response = await fetch(url,{
        method:"POST",
        body:formData,
    });

    if (!response.ok) {
        throw new Error ("something went wrong");
    }
    const data = await response.json();
    return data.secure_url;
}



