import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import "style/__app.scss";
import "style/Modal.mudule.css";

import Login from "pages/Login";
import Signup from "pages/Signup";
import _BasePage from "pages/_BasePage";
import Feeds from "pages/Feeds";
import MyNotification from "pages/MyNotification";
import CommentSection from "pages/CommentSection";
import Upload from "pages/Upload";

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot
(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <BrowserRouter> 

      <Routes>

        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />

        <Route path="/" element={<_BasePage/>}>
          <Route path="/" element={<Feeds/>} />
          <Route path="/" element={<Feeds/>} />
          <Route path="/upload" element={<Upload/>} />            
          <Route path="/comments/:postId" element={<CommentSection/>} />
          <Route path="/notification" element={<MyNotification/>} />
        </Route>

      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
