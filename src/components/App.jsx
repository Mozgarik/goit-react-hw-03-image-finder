import {React, Component} from "react";
import { Searchbar } from "./Searchbar";
import { ImageGallery } from "./ImageGallery";
import { Loader } from "./Loader";
import Modal from "./Modal";
import { Button } from "./Button";
import ApiService from "services/Api-Service";
import { ToastContainer } from "react-toastify";
import s from "./App.module.css"




const API = new ApiService()
class App extends Component {
  state = {
    photoTags: '',
    photo: [],
    loading: false,
    page: 1,
    largeImgUrl: '',
    modal: false,
    idImg: ''
  }
  
    componentDidMount() {
      this.setState({loading: true})
      setTimeout(() => {this.setState({loading:false})}, 1000)
    }
 
   handleFormSubmit = query => {
    if(this.state.page > 1) {
      this.setState({page: 1})
    }
    const imgData = query ? query : {};
    const {page} = this.state
    this.setState({photo: []})
    this.setState({photoTags: imgData})
    this.setState({loading: true})
    API.getImages(query, page).then(images => this.addDataToState(images)).finally(setTimeout(() => {this.setState({loading: false}) }, 2000))
  }

  addDataToState(images) {
    this.setState(prevState => ({
      photo: [...prevState.photo, ...images] 
    }))
  }

  loadMore = ref => {
     this.setState(prevState => ({
          page: prevState.page + 1,
          loading: true
      }))
      API.getImages(this.state.photoTags, this.state.page + 1).then(images => this.addDataToState(images)).finally(setTimeout(() => {this.setState({loading: false}) }, 1000))
      setTimeout(() => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }

    onClickImg = (e, img, id) => {
      e.preventDefault()
      this.setState(prevState => ({
        modal: !prevState.modal,
        largeImgUrl: img,
        idImg: id
    }))
     this.setState({loading: true})
      setTimeout(() => {this.setState({loading:false})}, 1000)
    }

  onClose = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
  }))
  }

 
  render() {
   const {loading, photo, modal, photoTags, largeImgUrl, idImg} = this.state
    return(
      <div>
         {modal && <Modal img={largeImgUrl} id={idImg} onClickImg={this.onClose}/>}
        <Searchbar submit={this.handleFormSubmit} />
        {loading && <Loader/>}
        {photo.length === 0 && <h2 className={s.tittle}>Введите запрос</h2>}
        {photo.length > 0 && <ImageGallery 
        modal={modal}
        photo={photo} 
        tags={photoTags}
        onClickImg={this.onClickImg}
        />}
        {photo.length > 0 && <Button incrementPage={this.loadMore}/>}   
        <ToastContainer autoClose={3000}/>
        </div>
    )
  }
}

export default App