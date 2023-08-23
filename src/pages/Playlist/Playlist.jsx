import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"

import {PlaylistContext} from '../../index'
import { Sidebar } from "../../components/Sidebar/Sidebar";

import {MdClose} from 'react-icons/md'

import './style.css'

export function Playlist(){

	const {createPlaylist,playlist,removePlaylist,removeVideo}=useContext(PlaylistContext)

	const [showPlaylistForm,setShowPlaylistForm]=useState(false);
	const [title,setTitle]=useState('');

	const navigate=useNavigate();

	const handlePlaylist=()=>{
		createPlaylist(title);
		setTitle('');
		setShowPlaylistForm(false);
	}

	return(
		<section className="layout">
			<Sidebar/>
			<div className="playlist">
				<div className="playlist_header">
					<h1 className="header">Playlist</h1>
					{
						!showPlaylistForm && <button className="primary_btn" onClick={()=>{
						setShowPlaylistForm(true);
						}}>Create Playlist</button>
					}
				</div>
			

			{
				showPlaylistForm && <div className="modal">
				<div className="modal_wrapper"></div>
				<div className="modal_container">
					<div className="modal_header">
						<button className="modal_icon" onClick={()=>{
							setShowPlaylistForm(false);
						}}><MdClose/></button>
					</div>
					<div className="modal_body">
						<label htmlFor="title">Playlist Name</label>
						<input onChange={(e)=>{
							e.preventDefault();
							setTitle(e.target.value);
						}} type="text" id="title" value={title}/>
						<button className="primary_btn" onClick={handlePlaylist}>Create Playlist</button>
					</div>
					
				</div>
			  </div>
			}

			<ul className="playlist_list">
				{
					playlist&& playlist.map(item=>{
						const {_id,name}=item;
						return (
							<li className="playlist_card" key={_id}>
								<div className="playlist_details">
									<h3>{name}</h3>
								</div>
								<div className="playlist_btns">
									<button className="primary_btn" onClick={()=>{
										navigate(`/playlist/${_id}`)
									}}>View</button>
									<button className="primary_btn" onClick={()=>{
										removePlaylist(name);
									}}>Delete</button>
								</div>								
							</li>
						)
					})
				}
			</ul>
			</div>
			
		</section>	
	)
}