import "./global.css" 
import style from "./App.module.css"
export function App (){ 
    return (
        <div className={style.main_container}> 
            <div className={style.header}></div> 
            <div className={style.tv_show_detail}></div> 
            <div className={style.recommentations}></div> 
        </div> 
    );
} 