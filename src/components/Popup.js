import React, { Component } from 'react';
import '../styles/popup.css'
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'


class Popup extends Component {
    constructor() {
        super();
        //сюда добавляю параметры клиента с новыми значениями
        this.state = {}
    
      }
    
    saveUserData = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      updateUserData = () => {
        this.props.updateUserData(this.props.currentId,Object.keys(this.state)[0],Object.values(this.state)[0])
        this.props.updateUserData(this.props.currentId,Object.keys(this.state)[1],Object.values(this.state)[1])
      }

    closePopup = () => {
        this.props.closePopup()
    }

    render() {
        const data = this.props.state.data
        const index = this.props.currentId
        return (
        <div className="popup-comp">
            <div className="popup-window">
            <FontAwesomeIcon icon={faTimesCircle} id="close-btn" onClick={this.closePopup} />
                <div className = "popup-content" id="popup-name">
                    Name:
                    <input placeholder={data[index].name} name ="name" onChange={this.saveUserData}>
                    </input>
                </div>
                <div className = "popup-content" id="popup-country">
                    Country:
                    <input placeholder={data[index].country} name ="country" onChange={this.saveUserData}>
                    </input>
                </div>
                <Button id="update-btn" onclick={this.props.updateUserInfo} onClick={this.updateUserData}>
                    Update</Button>
            </div>
        </div>)
    }

}
export default Popup;