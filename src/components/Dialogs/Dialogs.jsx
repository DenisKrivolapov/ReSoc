import React from "react";
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import {addMessageActionCreator, updateMessageTextActionCreator} from "./../../redux/state"




const Dialogs = (props) => {


    let dialogElements = props.messagesPage.dialogsData
        .map(dialog => <DialogItem name ={dialog.name} id={dialog.id} /> )
    
    let messagesElements = props.messagesPage.messagesData
        .map(message => <Message message = {message.message} id = {message.id} /> )

    let usersInput = React.createRef ();

    let addMessage = () =>{
        props.dispatch(addMessageActionCreator());      
        
    }

    let onMessageChange =() =>{
        let newText = usersInput.current.value;
        let action = updateMessageTextActionCreator(newText);
        props.dispatch (action);
    }


    return (
    <div className={classes.Dialogs}>
        <div className={classes.DialogItems}>
            { dialogElements }
        </div>

        <div className={classes.Messages}>
            { messagesElements }
            <div className={classes.usersInput} >
                <div>
                    <textarea onChange ={onMessageChange} className={classes.inputItem} ref ={usersInput} value ={props.messagesPage.messageDataUpdate}></textarea>
                </div>
                <div>
                    <input className={classes.inputButton} onClick ={addMessage} type="submit" value="Send message"></input>
                </div>
            </div>
        </div>
    </div>
    


    )
}

export default Dialogs;