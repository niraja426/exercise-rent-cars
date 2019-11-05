import React, { useState } from "react"
import Cars from "../server/cars.json"

function AllCars() {
    const [allCars, setAllCars] = useState(Cars);
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

    function totalPrice(duration,priceperday,distance, priceperdistance){
        if(duration<=1) return((duration*priceperday) + (distance*priceperdistance))
        else if (duration<=4) return(((duration*priceperday*0.9) + (distance*priceperdistance)))
        else if (duration<=10) return(((duration*priceperday*0.7) + (distance*priceperdistance)))
        else return(((duration*priceperday*0.5) + (distance*priceperdistance)))
    }


    return (
        <div>
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
            </div>

            <div className="car-container">
                {allCars.filter((car, j) => {
                    return ((parseInt(duration, 10) <= car.availability.maxDuration)
                        &&
                        (parseInt(distance, 10) <= car.availability.maxDistance)
                    )
                }).map((c, i) => {
                    let path = `/pictures/${i + 1}.jpg`;
                  
                    return (
                        <div className="car-card" key={i}>
                            <h1>{c.brand}</h1>
                            <img className="car-image" src={path} alt="image not found" />
                            <p><strong>Model:</strong> {c.model}</p>
                            <p>Price Per Day:$ 
                                    {(duration <= 1) && c.pricePerDay ||
                                    (duration > 1 && duration <= 4) && <><strike>{c.pricePerDay}</strike> ${0.9 * c.pricePerDay}</>
                                     ||
                                    (duration > 4 && duration < 10) && <><strike>{c.pricePerDay}</strike> ${0.7 * c.pricePerDay} </>||
                                    (duration >= 10) && <><strike>{c.pricePerDay}</strike> ${0.5 * c.pricePerDay}   </>}
                            </p>
                            <p>Price per KM: ${c.pricePerKm}</p>
                            <p className="total">TOTAL RENTAL PRICE: $ {totalPrice(duration,c.pricePerDay,distance,c.pricePerKm)}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default AllCars;
