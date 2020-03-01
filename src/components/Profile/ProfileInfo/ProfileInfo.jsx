import React from 'react';
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
	return (
		<div>
	    	<div className={classes.hero}>
	    		<img src = "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"/>
	    	</div>
	    	<div className={classes.infoBlock}>
				description
	    		<img src = "https://www.w3schools.com/howto/img_avatar.png"/>
	    	</div>
		</div>
		);
}

export default ProfileInfo;