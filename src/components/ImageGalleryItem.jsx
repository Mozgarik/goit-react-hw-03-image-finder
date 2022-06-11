import s from './App.module.css'
import PropTypes from 'prop-types';



 const ImageGalleryItem = ({onClickImg, img, large, id}) => {
    return (
        <li className={s.ImageGalleryItem} onClick={(e) => onClickImg(e, large, id)}>
        <img className={s.ImageGalleryItemImage} src={img.webformatURL} alt={img.tags} />
        </li>
        
 )
}

export default ImageGalleryItem

ImageGalleryItem.propTypes = {
    onClickImg: PropTypes.func.isRequired,
    large: PropTypes.string.isRequired,
    img: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired
  }