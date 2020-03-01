import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx'
import Profile from "../Profile"
import {addPostActionCreator, onPostChangeActionCreator} from "./../../../redux/state";




const MyPosts = (props) => {

	let postsElements = props.messages.map (message => <Post message ={message.message} likes ={message.likesCount}/> )

	let newPost = React.createRef ();	

	let addPost = () => {
		props.dispatch(addPostActionCreator())

	}

	let onPostChange =() => {
		let newText = newPost.current.value;
		props.dispatch(onPostChangeActionCreator(newText))
		
			

	}

	return (
	    	<div className = {classes.postsInfo}>
					<h3>My posts  </h3> 	
	    			<div>
						<div>
							<textarea onChange ={onPostChange} ref ={newPost} value ={props.newPostText} ></textarea>
						</div>
						<div>
							<input onClick ={addPost} className={classes.create_post} type="submit" value="Add New Post"></input>		
						</div>			
	    			</div>
	    			<div>
						{ postsElements }

	    			</div>
	    	</div>

		);
}

export default MyPosts;