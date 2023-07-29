import { useEffect,useContext } from "react"
import { useNavigate,Link } from 'react-router-dom';
import {CategoryContext, VideosContext} from '../../index'

import { Card } from "./Card";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome,faCompass,faList,faClock} from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';


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
			<li><Link style={{textDecoration:'none'}} to='/'><FontAwesomeIcon icon={faHome} /> Home</Link></li>
				<li><Link to='/explore' style={{textDecoration:'none'}}><FontAwesomeIcon icon={faCompass} />  Explore</Link></li>
				<li><Link to='/playlist' style={{textDecoration:'none'}}><FontAwesomeIcon icon={faList} />  Playlist</Link></li>
				<li><Link  style={{textDecoration:'none'}}><FontAwesomeIcon icon={faClock} /> Watch Later</Link> </li>
			</ul>
			

			<div className="videos">
			<header className='selected_category'>{selectedCategory}</header>
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