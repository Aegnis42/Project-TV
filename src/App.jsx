import "./global.css" 
import style from "./App.module.css"
export function App (){ 
    return (
        <div className={style.main_container}> 
            <div className={style.header}>
                <div className="row">
                    <div className="col-4">
                        <div>Logo</div>
                        <div>Subtitle</div>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <input type="text" />
                    </div>
                </div>
            </div> 
            <div className={style.tv_show_detail}>Details</div> 
            <div className={style.recommentations}>Recommendation</div> 
        </div> 
    );
} 