import style from "./TVShowList.module.css"
import { TVShowListItem } from "../TVShowListItems/TVShowListItem"
export function TVShowList({TVShowList, onClickItem}){
    return<>
    <div className={style.title}>You may also like :</div>
    <div className={style.list}>
        {TVShowList.map((tvShow)=>{
            return(
                <span key={tvShow.id} className={style.tv_show_list_item}>
                <TVShowListItem onClick={onClickItem} tvShow={tvShow} />
                </span>
            );
        })}
    </div>
    </>
}