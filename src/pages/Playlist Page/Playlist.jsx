import { useState,useContext, useEffect } from "react";

import './style.css'
import { PlaylistContext } from "../../context/playlistContext";

export function Playlist(){

	const {createPlaylist,playlists,deletePlaylist}=useContext(PlaylistContext)

	const [showModal, setShowModal] = useState(false);
	const [input,setInput]=useState('')



	const handleSubmit=()=>{
		setShowModal(false);
		createPlaylist(input);
	}

	return (
		<div className="playlist">
			<header>Playlist</header>
			<div className="playlist_body">
				<button onClick={()=>setShowModal(true)}>Create New Playlist</button>
				<div className="playlist_content">
					{
				playlists.map(item=>(
							<div className="playlist_card">
						<button onClick={()=>{
							deletePlaylist(item.name)
						}}>Delete</button>
						<img src="" alt="" />
						<p>{item.name}</p>
					</div>
						))
					}
					
				</div>
			</div>
			{showModal && <div className="modal">
		  <div className="modal_wrapper"></div>
		  <div className="modal_container">
			<h2>Create New Playlist</h2>
			<input type="text" name="" id="" onChange={(e)=>{
				e.preventDefault();
				setInput(e.target.value)
				}
			} />
			<button onClick={handleSubmit}>Submit</button>
		  </div>
		</div>}
		</div>
	)
}