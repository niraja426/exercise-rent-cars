import React from 'react'

function TotalPrice(props){
   const {duration,priceperday,distance,priceperdistance}=props
    if(duration<=1) return((duration*priceperday) + (distance*priceperdistance))
        else if (duration<=4) return(((duration*priceperday*0.9) + (distance*priceperdistance)))
        else if (duration<=10) return(((duration*priceperday*0.7) + (distance*priceperdistance)))
        else return(((duration*priceperday*0.5) + (distance*priceperdistance)))

}
export default TotalPrice