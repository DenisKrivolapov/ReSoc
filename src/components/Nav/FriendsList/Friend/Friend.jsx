import React from 'react';
import classes from"./Friend.module.css";

const Friend = (props) => {
	return (
		<div className={classes.item}>
			<div className={classes.itemImage}>
				{props.image}
			</div>
			<div className = {classes.itemText}>
				{props.name}
			</div>
			
		</div>
		);
}

export default Friend;