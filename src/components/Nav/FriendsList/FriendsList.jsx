import React from 'react';
import classes from"./FriendsList.module.css";
import Friend from "./Friend/Friend.jsx";

const FriendsList = (props) => {

	let users = props.state.map(Item => <Friend name = {Item.name} image = {Item.image} id={Item.id}/> );


	return (
			<div className = {classes.list}>
					{ users }
			</div>

		);
}

export default FriendsList;