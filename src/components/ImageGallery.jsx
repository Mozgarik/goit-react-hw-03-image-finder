import {React} from "react";
import ImageGalleryItem from "./ImageGalleryItem";
import s from './App.module.css'

export function ImageGallery({onClickImg, modal, photo}) {
      return(
        <ul className={s.ImageGallery}>
      {photo.map(el => (
           <ImageGalleryItem 
        id = {el.id}
        img = {el} 
        key={el.id}
        modal = {modal}
        onClickImg = {onClickImg}
        large = {el.largeImageURL}
        />
      ))}
       
       
      </ul>
    )  
}