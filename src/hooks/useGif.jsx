import React from "react";
import axios from "axios";
import  { useEffect, useState } from "react";

const useGif=(tag)=>{
    
    const [gif,setGif]=useState('car');
    const url =`https://api.giphy.com/v1/gifs/random?api_key=YUtl169hanWodQQ9ILzI0reSmnjIjVGJ`;
    const [loading,setLoading]=useState(false);
    

   async function fetchData(tag) {
    setLoading(true);
   const {data}=await axios.get(tag?`${url}&tag=${tag}`:url);
//    console.log(output);
    const imageSource=data.data.images.downsized_large.url;
    // console.log(imageSource);
    setGif(imageSource);
    setLoading(false);
  }
  useEffect(()=>{
    fetchData('car');
  },[]);

   
return{gif,loading,fetchData};
}
export default useGif;