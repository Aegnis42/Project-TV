import "./global.css" 
import style from "./App.module.css"
import { TVShowAPI } from "./api/tv-show";
import { useEffect, useState } from "react";


export function App (){ 
    const [currentTVShow, setCurrentTVShow] = useState();

    async function fetchPopulars(){
        const populars = await TVShowAPI.fetchpopulars();
        if(populars.length>0){
            setCurrentTVShow(populars[0])
        }
    }

    useEffect(() => {
        fetchPopulars()
    }, []);
    console.log("***", currentTVShow)
    return (
        <div className={style.main_container}> 
            <div className={style.header}>
                <div className="row">
                    <div className="col-4">
                        <div>Logo</div>
                        <div>Subtitle</div>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <input style={{width: "100%"}} type="text" />
                    </div>
                </div>
            </div> 
            <div className={style.tv_show_detail}>Details</div> 
            <div className={style.recommentations}>Recommendation</div> 
        </div> 
    );
} 