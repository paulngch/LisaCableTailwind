import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Album() {
  const [albumPictures, setAlbumPictures] = useState([]);
  const [error, setError] = useState("");

  const fetchAlbum = async () => {
    try {
      const { data: response } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/cable`
      );
      if (response) {
        setAlbumPictures(response);
        console.log(response);
      }
    } catch (error) {
      console.log(error.message);
      // console.log(error.response.error);
      // setError(error.response.error);
    }
  };

  useEffect(() => {
    fetchAlbum();
    // console.log(albumPictures)
  }, []);

  const dbCables = albumPictures.map((ele, i) => (
    <>
      <div>{ele.desc}</div>
      <img src={ele.url} />
    </>
  ));

  return <div>{dbCables}</div>;
}
