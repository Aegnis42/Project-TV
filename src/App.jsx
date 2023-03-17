import "./global.css" 
import style from "./App.module.css"
import { TVShowAPI } from "./api/tv-show";
import { useEffect, useState } from "react";
import { BACKDROP_BASE_URL } from "./config";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
import { Logo } from "./components/Logo/Logo";
import logo from "./assets/images/logo.png"


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
        <div className={style.main_container}
        style = {{background:currentTVShow
            ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
            : "black",}}> 
            <div className={style.header}>
                <div className="row">
                    <div className="col-4">
                        <Logo 
                        image={logo} 
                        title="WatchMeFavor" 
                        subtitle="Find a show for me"/>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <input style={{width: "100%"}} type="text" />
                    </div>
                </div>
            </div> 
            <div className={style.tv_show_detail}>{currentTVShow && <TVShowDetail tvShow={currentTVShow}/>}</div> 
            <div className={style.recommentations}>Recommendation</div> 
        </div> 
    );
} 