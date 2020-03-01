import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import sidebarReducer from "./sidebar-reducer"

const ADD_POST = "ADD-POST"
const ON_POST_CHANGE = "UPDATE-POST-TEXT"
const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT"



let store = {
    _reRenderEntireTree() {
        console.log("привет")
    },

    _state: {
        profilePage:{
            postsData:
            [
                {id: 1, message:"Hi, how are you?", likesCount:20},
                {id: 2, message:"My first post", likesCount:50},
            ],
            newPostText:"it-kamasutra"
        },
        messagesPage:{

            dialogsData:[  
                    {id: 1, name:"Ilia"},
                    {id: 2, name:"Alex"},
                    {id: 3, name:"Timothy"},
                    {id: 4, name:"Gene"},
                    {id: 5, name:"Irina"}
            ],
    
            messagesData:[
                    {id: 1, message:"Hi, how are you?"},
                    {id: 2, message:"Is there something I can do 4 ya?"},
                    {id: 3, message:"LOl lolololol, KEK"},
                    {id: 4, message:"Yo"},
                    {id: 5, message:"Yo"},
                    {id: 6, message:"SUP?"},
                    {id: 7, message:"Yo,bro"}
        
            ],
    
            messageDataUpdate:"hai, it-kamasutra!"
    
    
        },

        friendsSection:[
            {id: 1, name: "john", image: ""},
            {id: 2, name: "ivan", image: ""},
            {id: 3, name: "alex", image: ""},
            {id: 4, name: "john", image: ""},
            {id: 5, name: "ivan", image: ""},
            {id: 6, name: "alex", image: ""},
        ]

    },


     dispatch(action) {
        this._state.profilePage = profileReducer (this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer (this._state.messagesPage, action)
        this._state.friendsSection = sidebarReducer (this._state.friendsSection, action)
        this.reRenderEntireTree(this._state)

    },



    subscriber (observer){

        this.reRenderEntireTree = observer
    },

    getState(){
        return this._state
    }


}

export const addPostActionCreator = () => ({type: ADD_POST})

export const onPostChangeActionCreator = (newText) => ({type: ON_POST_CHANGE, newText: newText})

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const updateMessageTextActionCreator = (newText) => ({type: UPDATE_MESSAGE_TEXT, newText: newText})


export default store;