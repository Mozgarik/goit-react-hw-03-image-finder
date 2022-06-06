import {  React, Component } from 'react'
import s from './App.module.css'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"


export class Searchbar extends Component {
    state = {
        photoTags: "",
    }

    nameChange = event => {
        this.setState({ photoTags: event.currentTarget.value.toLowerCase() })
      }

    handleSubmit = event => {
        event.preventDefault()
        if(this.state.photoTags.trim() === "") {
            toast.dark("Введите корректный запрос", {
                appearance: 'warning',
                autoDismiss: true,
              })
            return
        }
        this.props.submit(this.state.photoTags)
        this.setState({photoTags: ""})
    }  

    render() {
    return(
        <header className={s.Searchbar}>
        <form className={s.Form} onSubmit={this.handleSubmit}>
               <input
            className={s.Input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.nameChange}
            />
            <button type="submit" className={s.SearchFormButton}>
            Search
            </button>
    
    
      </form>
    </header>
    )
    }
}

