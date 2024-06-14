import {useState} from "react";
import {sculptureList} from "./data.js";

export default function Gallery()
{
  let [index,setIndex]= useState(0);

  function handleNextClick()
  {
    setIndex((index+1)%sculptureList.length);
  }
  function handlePreviousClick()
  {
    setIndex((index===0)?sculptureList.length-1:index-1);
  }

  let sculpture= sculptureList[index];
  return (
    <>
    <button onClick={handlePreviousClick} style={{marginRight:"1rem", marginTop:"0.5rem"}}>
      Previous
    </button>

    <button onClick={handleNextClick} style={{marginTop:"0.5rem"}}>
      Next
    </button>

    <h2>
      <i>{sculpture.name}</i> by {sculpture.artist}
      ({index+1} of {sculptureList.length})
    </h2>
    <p>
      {sculpture.description}
    </p>

    <img src={sculpture.url} alt={sculpture.name} />
    </>
  );
}