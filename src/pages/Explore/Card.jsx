import './style.css'

import { useContext } from "react";

import {MdWatchLater} from 'react-icons/md'

import {WatchlaterContext} from '../../index'
import { useNavigate } from 'react-router-dom';

export function Card({video}){

	const {_id,title,views,chips,thumbnail,src,creator}=video;

	const {watchLater,addToWatchLater,removeFromWatchLater}=useContext(WatchlaterContext);

	const navigate=useNavigate();

	return (
		<div className="card">
			<div className="card_icons">
					{
						watchLater.find(item=>item.title===title)? <button onClick={()=>{
							removeFromWatchLater(video);
						}} className='card_icon filled'><MdWatchLater/></button>:
						<button onClick={()=>{
							addToWatchLater(video);
						}}className='card_icon '><MdWatchLater/></button>
					}	
					
				</div>
			<div className="card_header">
				<img className="card_img" src={thumbnail} alt="profile" />	
			</div>
			<div className="card_body">
					<h3 onClick={()=>{
							navigate(`/video/${_id}`)
						}}  className="card_title">{title}</h3>
					<div className="card_content">
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, velit.</p>
						<div className="card_btns">
						
						</div>
						
					</div>
			</div>
		</div>	
	)
}