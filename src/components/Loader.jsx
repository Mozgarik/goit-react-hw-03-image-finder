import { Hearts } from  'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import s from './App.module.css'

export function Loader() {
    return(
       <div className={s.Loader}><Hearts ariaLabel="loading-indicator" color='pink'   height={200} width={200}/> </div> 
    )
}