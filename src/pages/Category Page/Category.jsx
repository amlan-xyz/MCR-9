import { useEffect,useContext } from "react"
import { useNavigate } from 'react-router-dom';
import {CategoryContext, VideosContext} from '../../index'

import { Card } from "./Card";

import './style.css'

export function Categories(){
	const {selectedCategory}=useContext(CategoryContext);
	const {allVideos,getVideos}=useContext(VideosContext)
	const {getSingleVideo} =useContext(VideosContext)

	const navigate=useNavigate();

	useEffect(()=>{
		getVideos(selectedCategory);
	},[])
	
	return (
		<div className="category_videos_container">
			<ul className="sidebar">
				<li>Home</li>
				<li>Explore</li>
				<li>Playlist</li>
				<li>Watch Later</li>
			</ul>
			

			<div className="videos">
			<p className='selected_category'>{selectedCategory}</p>
			<ul >
			{
					allVideos.map(item=>{
						const {_id,title,views,chips,thumbnail,src,category,creator}=item;
						return (
							<li onClick={()=>{
								navigate(`/video/${_id}`)
								getSingleVideo(_id);
							}} key={_id}>
								<Card item={item}/>
								
							</li>	
						)
					})
				}
			</ul>
				
			</div>
		</div>
		
		)
}