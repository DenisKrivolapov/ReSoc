const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT"

const dialogsReducer = (state, action) =>{

    if (action.type === "ADD-MESSAGE"){
        let newMessage = {
            id: 8,
            message: state.messageDataUpdate
        }
    
        state.messagesData.push(newMessage);
        state.messageDataUpdate = ""


    }else if (action.type === "UPDATE-MESSAGE-TEXT"){
        state.messageDataUpdate = action.newText;

    }
    debugger;
    return state

}
debugger;
export default dialogsReducer