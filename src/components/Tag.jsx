import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
// const API_KEY=process.env.REACT_APP_GIPHY_API_KEY
 const Tag=()=>{
    const[tag,setTag]=useState("car");
    const {gif,loading,fetchData}=useGif(tag);
    function clickHandler(tag){
        // console.log("cfghui");
        fetchData();
    }

    function changeHandler(event  ){
        setTag(event.target.value);
    }

    return(
        <div className=" w-1/2  bg-blue-400 rounded-lg border border-black
        flex flex-col items-center gap-y-5 mt-[15px]">

            <h1 className=" text-2xl underline uppercase font-bold">Random {tag} Gif</h1>
            {
                loading?(<Spinner/>):(<img src={gif} width="450"/>)
            }
            <input 
            className=" w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"
            onChange={changeHandler}
            value={tag}
            />
            <button className=" w-10/12 bg-orange-300 text-lg py-2 rounded-lg mb-3" 
            onClick={clickHandler}>Generate</button>

        </div>

    )
 }

 export default Tag;