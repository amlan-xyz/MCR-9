import { useNavigate,useParams } from "react-router-dom";
import { useEffect,useContext, useState } from "react";

import {VideosContext,WatchlaterContext,PlaylistContext} from '../../index'

import './style.css'
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Card } from "./Card";

export function Videos(){

	const {getVideos,allVideos}=useContext(VideosContext);


	const navigate=useNavigate();
	const {category}=useParams();

	useEffect(()=>{
		getVideos(category);	
	},[])

	return (
		<section className="layout">
			<Sidebar/>
			<div className="videos">
			<h1 className="header">{category}</h1>
			<ul className="card_list">
				{
					allVideos && allVideos.map(video=>{
						
						return(
							<li key={video._id}>
								<Card video={video} />		
							</li>	
						)
					})
				}
			</ul>
			</div>
			
		</section>	
	)
}