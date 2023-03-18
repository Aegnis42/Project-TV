import "./global.css" 
import style from "./App.module.css"
import { TVShowAPI } from "./api/tv-show";
import { useEffect, useState } from "react";
import { BACKDROP_BASE_URL } from "./config";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
import { Logo } from "./components/Logo/Logo";
import logo from "./assets/images/logo.png"
import { TVShowList } from "./components/TVShowList/TVShowList";
import { SearchBar } from "./components/SearchBar/SearchBar";


export function App (){ 
    const [currentTVShow, setCurrentTVShow] = useState();
    const [recommendationsList, setRecommendationList] = useState()

    async function fetchPopulars(){
        try{
        const populars = await TVShowAPI.fetchPopulars();
        if(populars.length>0){
            setCurrentTVShow(populars[0])
        }
    }catch{
        alert("Error server");
    }
    }
    async function fetchRecommendations(tvShowId){
    try{
        const Recommendations = await TVShowAPI.fetchRecommendations(tvShowId);
        if(Recommendations.length>0) {
            setRecommendationList(Recommendations.slice(0, 10));
        }
    }catch{
        alert("Error server");
    }
    }
    async function searchTVShow(tvShowName) {
    try{
        const searchResponse = await TVShowAPI.fetchByTitle(tvShowName);
        if (searchResponse.length > 0) {
          setCurrentTVShow(searchResponse[0]);
        }
    }catch{
        alert("Error server");
    }
      }
    useEffect(() => {
        fetchPopulars()
    }, []);
    useEffect(() => {
        if(currentTVShow){
            fetchRecommendations(currentTVShow.id)
        }
    }, [currentTVShow]);
    
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
                        <SearchBar onSubmit={searchTVShow} />
                    </div>
                </div>
            </div> 
            <div className={style.tv_show_detail}>{currentTVShow && <TVShowDetail tvShow={currentTVShow}/>}</div> 
            <div className={style.recommendations}>{recommendationsList && recommendationsList.length > 0 && 
                <TVShowList onClickItem={setCurrentTVShow} TVShowList ={recommendationsList}/>
            }</div> 
        </div> 
    );
} 