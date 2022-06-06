import s from './App.module.css'



 const ImageGalleryItem = ({onClickImg, img, large, id}) => {
    return (
        <li className={s.ImageGalleryItem} onClick={(e) => onClickImg(e, large, id)}>
        <img className={s.ImageGalleryItemImage} src={img.webformatURL} alt={img.tags} />
        </li>
        
 )
}

export default ImageGalleryItem