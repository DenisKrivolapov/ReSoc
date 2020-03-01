import React from 'react';
import classes from"./Header.module.css";

const Header = () => {
	return (
		<header className = {classes.header}>
    		<img src ="https://cdn.shopifycloud.com/hatchful-web/assets/6fcc76cfd1c59f44d43a485167fb3139.png"/>
    	</header>
		);
}

export default Header;