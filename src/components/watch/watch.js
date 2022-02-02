import React from "react";
import { Stopwatch } from "../stopwatch/stopwatch";
import './watch.css'

function WatchFace({onStart, onReset, onWait, timer}) {
    return(<>
        <section className ='watch'>
            <article className='watch-face'>
                <p className = 'out'>
                    <span className = 'time'>{Stopwatch(timer)}</span>
                </p>
                <div className = 'control-btns'>
                    <button className = 'btn' onClick = {()=>{onStart()}}>Start/Stop</button>
                    <button className = 'btn' onClick = {()=>{onReset()}}>Reset</button>
                    <button className = 'btn wait' onClick = {()=>{onWait()}}>Wait</button>
                </div>
            </article>
        </section>
    </>)
}

export default WatchFace