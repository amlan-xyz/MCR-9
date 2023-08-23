import './style.css'

import { useContext } from "react";

import {MdWatchLater} from 'react-icons/md'

import {WatchlaterContext} from '../../index'

export function Card({video}){

	const {title,thumbnail}=video;

	const {removeFromWatchLater}=useContext(WatchlaterContext);

	return (
		<div className="card">
			<div className="card_icons">
				<button onClick={()=>{
					removeFromWatchLater(video);
				}} className='card_icon filled'><MdWatchLater/></button>		
			</div>
			<div className="card_header">
				<img className="card_img" src={thumbnail} alt="profile" />	
			</div>
			<div className="card_body">
					<h3 className="card_title">{title}</h3>
					<div className="card_content">
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, velit.</p>	
					</div>
			</div>
		</div>	
	)
}