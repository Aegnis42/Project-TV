import { SMALL_IMG_COVER_BASE_URL } from "../../config"
import style from "./TVShowListItem.module.css"

export function TVShowListItem ({tvShow , onClick}){
    return <div onClick={()=>onClick(tvShow)} className={style.container} >
        <img 
        className={style.img}
        alt={tvShow.name}
        src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path} />
        <div className={style.title}>{tvShow.name}</div>
    </div>
}