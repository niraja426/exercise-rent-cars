import React,{useState} from 'react'

function Filter(){

    const [duration, setDuration] = useState("1");
    const [distance, setDistance] = useState("50")

    function handleDuration(e) {
        e.preventDefault();
        setDuration(e.target.value);
    }

    function handleDistance(e) {
        e.preventDefault();
        setDistance(e.target.value);
    }
    return(

    <div className="filter">
                <label className="label" htmlFor="duration">Filter By Duration <strong>[Days]</strong> : </label>
                <input
                    id="duration"
                    type="number"
                    min="0"
                    max="30"
                    value={duration}
                    onChange={handleDuration}
                    name="duration"
                />
                <label className="label" htmlFor="distance">Filter By Distance <strong>[km]</strong>: </label>
                <input
                    id="distance"
                    type="number"
                    min="50"
                    max="3000"
                    step="50"
                    value={distance}
                    onChange={handleDistance}
                    name="distance"
                />
    </div>)

}

export default Filter