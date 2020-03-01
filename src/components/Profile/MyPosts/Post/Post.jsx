import React from 'react';
import classes from './Post.module.css';


const Post = (props) => {
	return (
	    	<div className ={classes.item}>
				<img src ="https://cdn.dribbble.com/users/374864/screenshots/1812257/business-avatar.png"/>
				<div>
					{props.message}
				</div>   			
				<div>
					<span>
						{props.likes}
					</span>
					<span>&#128077;</span>
				</div>
	    	</div>

		);
}

export default Post;