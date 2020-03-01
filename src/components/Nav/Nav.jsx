import React from 'react';
import classes from"./Nav.module.css";
import {NavLink} from "react-router-dom";
import FriendsList from "./FriendsList/FriendsList"

const Nav = (props) => {
	return (
		<nav className = {classes.nav}>
	    	<div className={classes.item}>
	    		<NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
	    	</div>
	    	<div className={classes.item}>
	    		<NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
	    	</div>
	    	<div className={classes.item}>
	    		<NavLink to="/news" activeClassName={classes.active}>News</NavLink>
	    	</div>
	    	<div className={classes.item}>
	    		<NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
	    	</div>
	    	<div className={classes.item}>
	    		<NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
	    	</div>
				<div className ={classes.friendsItem}>
					<div className={classes.item}>
						<NavLink to="/friends" activeClassName={classes.active}>Friends</NavLink>
							<div className={classes.friendsList}>
								<FriendsList state ={props.state} />
							</div>
					</div>
				</div>
    		
    	</nav>
		);
}

export default Nav;