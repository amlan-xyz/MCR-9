import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom"
import { VideosContext } from "../../index";

import './style.css'

export function Video(){

	const {getSingleVideo,singleVideo,getRandomVideos,randomVideos} =useContext(VideosContext)
	const {id}=useParams();

	useEffect(()=>{
		getSingleVideo(id);
		getRandomVideos();
	},[])

	return(
		<div className="single_video_container">
			<ul className="sidebar">
				<li>Home</li>
				<li>Explore</li>
				<li>Playlist</li>
				<li>Watch Later</li>
			</ul>
			<div className="main">
			{
				singleVideo.map(item=>{
					const {_id,title,views,chips,thumbnail,src,category,creator}=item;
					return(
						<div className="video_content">
							<iframe className="video_src" src={src}>
</iframe>
							<div className="video_body">
								<div className="">
									<img src="" alt="" />
									<p>{title}</p>
								</div>
								<div className="
								"><button>Save to playlist</button>
								<button>Watch Later</button>
								<button>Add Notes</button></div>
								
							</div>
						</div>
					)
				})
			}

				
				<hr />
				<h3>My notes</h3>
				<ul>
					<li>Notes</li>
				</ul>
			</div>
			

			<div	className="aside">
				<h3>More videos</h3>
				<ul>
					{
						randomVideos.map(item=>{
							const {_id,title,views,chips,thumbnail,src,category,creator}=item;
							return (
								<li>
									<img src={thumbnail} alt="" />
									<p>{title} <br /> {creator}</p>
								</li>	
							)
						})
					}
				</ul>
			</div>
		</div>
			
		)
}