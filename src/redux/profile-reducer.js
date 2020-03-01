const ADD_POST = "ADD-POST"
const ON_POST_CHANGE = "UPDATE-POST-TEXT"


const profileReducer = (state, action) =>{
    debugger;
    if (action.type === "ADD-POST"){
        let newMessage = {
            id: 3,
            message: state.newPostText,
            likesCount: 0
        };
        state.postsData.push(newMessage);
        state.newPostText =""; 


    } else if (action.type === "UPDATE-POST-TEXT"){
        state.newPostText = action.newText


    }
    return state
}
export default profileReducer