import { useContext, useEffect, useState } from "react"

import {VideosContext} from '../../index'

import {videos} from '../../data/video'

export function Explore(){
	const [allVideos,setAllVideos]=useState([]);

	useEffect(()=>{
		setAllVideos(videos)
	},[])

	return (
		<div className="explore">
			<header>Explore</header>
			<input type="search" name="" id="" placeholder="Seacrh video by title" />
			<ul>
				{
					allVideos.map(item=>{
						const {_id,title,views,chips,thumbnail,src,category,creator}=item;
						return (
							<p>{title}</p>
						)
						
					})
				}
			</ul>
		</div>
	)
}