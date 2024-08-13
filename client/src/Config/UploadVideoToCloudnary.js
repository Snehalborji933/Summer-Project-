export const uploadMediaToCloudinary = async (media) => {
    if (media) {
      const data = new FormData();
      data.append("file", media);
      data.append("resource_type", "video");
      data.append("upload_preset", "instagram");
      // data.append("cloud_name", "dnbw04gbs");
      data.append("cloud_name", "daggqjlii");

  
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/daggqjlii/video/upload",
        {
          method: "post",
          body: data,
        }
      );
      const fileData = await res.json();
      console.log("url : ", fileData);
      return fileData.url.toString();
    } else {
      console.log("error");
    }
  };
  