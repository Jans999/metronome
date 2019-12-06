import React from 'react';
import '../App.css';



const Slider = (props) =>  {

        return(
            <form className="slider">
                <label htmlFor="bpm"> {props.value} BPM</label>
                <input type="range" min="45" max="150" name="bpm" value={props.value} onChange={props.handleChange}></input>
            </form>
        );

}

export default Slider;