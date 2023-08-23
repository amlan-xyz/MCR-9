import { useContext, useEffect, useState } from "react"

import {ExploreContext,WatchlaterContext} from '../../index'
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar/Sidebar";

import './style.css'
import { Card } from "./Card";

export function Explore(){

	const {exploreVidoes,getExploreVideos,searchVideo}=useContext(ExploreContext);
	const {watchLater,addToWatchLater,removeFromWatchLater}=useContext(WatchlaterContext);

	const [search,setSearch]=useState('');

	const navigate=useNavigate();

	useEffect(()=>{
		getExploreVideos();
	},[])

	useEffect(()=>{
		searchVideo(search);
	},[search])

	return(
		<section className="layout">
			<Sidebar/>
			<div className="explore">
				<div className="explore_header">
					<h1 className="header">Explore</h1>
					<input type="search" placeholder="Search by title or category"  id="search" value={search} onChange={(e)=>{
					e.preventDefault();
					setSearch(e.target.value);
					}}/>
				</div>
			<ul className="card_list">
				{
					exploreVidoes.map(video=>{
						const {_id}=video;
						return(
							<li key={_id}>
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