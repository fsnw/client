import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import { storage } from "helpers/firebase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";

import UserSession from "helpers/UserSession";

import {v4} from "uuid";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";


const Upload = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const [content, setContent] = useState("");

  const imagesListRef = ref(storage, "images/");

  let navigate = useNavigate();

  const uploadFile = () => {
    console.log(imageUpload)
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);

    console.log(`images/${imageUpload.name + v4()}`);

    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {

        const data = {
            userId: JSON.parse(UserSession.get()),
            image: url,
            content: content
        }

        axios.post('https://localhost:7255/api/Posts', data)
            .then(res => {
                navigate('/');
            })
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);


   return <>
  <div className="darkBG" />
  <div className="centered">
    <div className="modal">
      <div className="modalHeader">
        <h5 className="heading">Create a new post</h5>
      </div>
      <hr/>
      {!imageUpload ? (
        <div>
      <div className="modalContent">
        Drag photos and videos here
      </div>
      <div className="iconPhoto">
    </div>
    </div>
      ) : 
      <div className="create-post">
        <div className=".postContainer">
         <h4>Write content</h4>
         <textarea rows="3" placeholder="Enter... " onChange={event => setContent(event.target.value)} className='input-content'/>
        </div>
      <img src={URL.createObjectURL(imageUpload)} className="post-image" alt=""/>

  </div>
  }
      
      <div className="modalActions">
        <div className="actionsContainer">
            <input  className="chooseBtn" type="file" onChange={(event)=>{setImageUpload(event.target.files[0]);}}/>
        </div>
        <button className="uploadBtn" onClick={uploadFile} >
                Upload image
            </button>
      </div>
    </div>
  </div>
</>
};

export default Upload;