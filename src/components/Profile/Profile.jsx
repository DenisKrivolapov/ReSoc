import React from 'react';
import classes from "./Profile.module.css";
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo';




const Profile = (props) => {

	return (
		<div>
			<ProfileInfo />
			<MyPosts messages = {props.profilePage.postsData}
					 newPostText = {props.profilePage.newPostText}				
					 dispatch = {props.dispatch}

					 />
    	</div>

		);
}

export default Profile;
