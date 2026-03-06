import React, { useRef, useEffect, useState } from "react";
import * as faceapi from "face-api.js";
import axios from "axios";
import { loadModels } from "../utils/faceLoader";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { faceLogin } from "../redux/features/authSlice";

const FaceLogin = () => {

 const videoRef = useRef();
 const navigate = useNavigate();
 const dispatch = useDispatch();

 const [modelsLoaded,setModelsLoaded] = useState(false);
 const [loading,setLoading] = useState(false);
 const [error,setError] = useState("");

 useEffect(()=>{

  const init = async()=>{

   await loadModels();
   setModelsLoaded(true);
   startCamera();

  };

  init();

 },[]);

 const startCamera = async () => {

  const stream = await navigator.mediaDevices.getUserMedia({ video:true });
  videoRef.current.srcObject = stream;

 };

 const loginFace = async () => {

  setLoading(true);
  setError("");

  const detection = await faceapi
   .detectSingleFace(
    videoRef.current,
    new faceapi.TinyFaceDetectorOptions()
   )
   .withFaceLandmarks()
   .withFaceDescriptor();

  if(!detection){

   setLoading(false);
   setError("Face not detected");
   return;

  }

  const descriptor = Array.from(detection.descriptor);

  const res = await axios.post(
   "http://localhost:5000/login",
   { descriptor }
  );

  setLoading(false);

  if(res.data.match){

   // ✅ Redux auth update
   dispatch(faceLogin());

   // ✅ dashboard redirect
   navigate("/");

  }else{

   setError("Face not recognized");

  }

 };

 return (

  <div className="space-y-4 text-center">

   {!modelsLoaded && (
    <div className="flex justify-center py-6">
     <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
   )}

   <video
    ref={videoRef}
    autoPlay
    width="320"
    className="rounded-xl border border-gray-700"
   />

   {loading && (
    <div className="text-white text-sm">Scanning face...</div>
   )}

   {error && (
    <div className="text-red-400 text-sm">{error}</div>
   )}

   <button
    onClick={loginFace}
    disabled={!modelsLoaded}
    className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
   >
    Login with Face
   </button>

  </div>

 );
};

export default FaceLogin;