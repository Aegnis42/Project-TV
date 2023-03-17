import style from "./FiveStarRating.module.css"
import { StarFill, Star as StarEmpty, StarHalf } from "react-bootstrap-icons"
export function FiveStarRating({ rating }) {

    const starList = [];

    const starFillCount = Math.floor(rating)

    const hasStarHalf = rating - starFillCount >= 0.5

    const emptyStarCount = 5- starFillCount-( hasStarHalf ? 1 : 0);

    for (let i = 1; i <= starFillCount; i++ ){
        starList.push( <StarFill keu ={"star-fill"+i}/>)
    }
    if (hasStarHalf){
        starList.push( <StarHalf keu ={"star-half"}/>)
    }
    for (let i = 1; i <= emptyStarCount; i++ ){
        starList.push( <StarEmpty keu ={"star-Empty"+i}/>)
    }

    return <div>
       {starList}
    </div>
}