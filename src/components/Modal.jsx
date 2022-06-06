import s from './App.module.css'
import {React, Component} from 'react'


class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
      }
    
      componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
      }
    
      handleKeyDown = e => {
        if (e.code === 'Escape') {
          this.props.onClickImg();
        }
        if (e.target === e.currentTarget) {
          this.props.onClickImg();
        }
      };
    render(){
        return(
        <div className={s.Overlay} onClick={this.handleKeyDown}>
            <div className={s.Modal}>
                <img height={'800px'} width={"800px"} src={this.props.img} alt={this.props.id} />
            </div>
        </div>
    )
    }
}


export default Modal