import React, { useEffect, useState } from "react";
import Styles from "./Stopwatch.module.css"

export default function Stopwatch(){

    const[isRunning,setIsRunning] = useState(false);
    const[elapsedTime,setElapsedTime] = useState(0);

    useEffect(()=>{
        let intervalId;
        if(isRunning){
            intervalId = setInterval(()=>{
                setElapsedTime((prevElapsedTime)=>prevElapsedTime+1)
            },1000)
        }else {
            clearInterval(intervalId)
        }
        return ()=> clearInterval(intervalId)
    },[isRunning])

    const formatTime = (time) =>{
        const minutes = Math.floor(time/60);
        const remainingSeconds = time % 60;
        return `${minutes}:${remainingSeconds <10 ? "0" : ""}${remainingSeconds}`
    };

    const startstop = ()=>{
        setIsRunning(!isRunning);
    }

    const reset = () =>{
        setIsRunning(false);
        setElapsedTime(0);
    };

    return(
        <div >
            <h1 className={Styles.heading}>Stopwatch</h1>
            <p className={Styles.heading}>Time : {formatTime(elapsedTime)}</p>
            <button className={Styles.btn} onClick={startstop}>{isRunning ? "Stop" : "Start"}</button>
            <button className={Styles.btn} onClick={reset}>Reset</button>
        </div>
    )
}