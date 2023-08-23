import { useContext, useEffect,useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { SingleVideoContext,PlaylistContext,WatchlaterContext,NotesContext } from "../../index"
import { Sidebar } from "../../components/Sidebar/Sidebar";


import {MdEdit,MdWatchLater, MdDelete, MdNotes,MdOutlinePlaylistAdd ,MdClose} from 'react-icons/md'

import './style.css'


export function SingleVideo(){
	const {getVideo,video,asideVideos}=useContext(SingleVideoContext);
	const {createPlaylist,playlist,addToPlaylist,removePlaylist}=useContext(PlaylistContext)
	const {watchLater,addToWatchLater,removeFromWatchLater}=useContext(WatchlaterContext);
	const {addNotes,notes,deleteNote,updateNotes}=useContext(NotesContext);

	const [showPlaylistForm,setShowPlaylistForm]=useState(false);
	const [title,setTitle]=useState('');
	const [showPlaylists,setShowPlaylists]=useState(false);
	const [showNotes,setShowNotes]=useState(false);
	const [text,setText]=useState('');
	const [updateForm,setUpdateForm]=useState(false);
	
	const {id}=useParams();

	const navigate=useNavigate();

	const handlePlaylist=()=>{
		createPlaylist(title);
		setTitle('');
		setShowPlaylistForm(false);
	}
	const showPlaylist=()=>{
		setShowPlaylists(!showPlaylists)
	}

	useEffect(()=>{
		getVideo(id);
	},[]);


	return(
		<section className="layout">
			<Sidebar/>
			<div className="single_video">
				<div className="video_details">
					<iframe
						src={video.src}>
					</iframe>
					<div className="video_body">
						<div className="video_content">
							<img src={video.thumbnail} alt="" />
							<p>{video.title}</p>
						</div>
					<div className="video_actions">
					{/* {
						!showPlaylistForm && <button onClick={()=>{
						setShowPlaylistForm(true);
						}}>Create Playlist</button>
					} */}

					{/* add to playlist */}
					{
						!showPlaylists && <button onClick={()=>{
						showPlaylist();
						}}><MdOutlinePlaylistAdd/></button>
					}
					{/* watch later */}

					{
						watchLater.find(item=>item.title===title)? <button onClick={()=>{
							removeFromWatchLater(video);
						}} className='filled'><MdWatchLater/></button>:
						<button onClick={()=>{
							addToWatchLater(video);
						}}className=''><MdWatchLater/></button>
					}		

					{/* add notes  */}

					{
						!showNotes && <button onClick={()=>{
							setShowNotes(true);
						}}><MdNotes/></button>
					}	
					</div>
					</div>
					
					<h3>My Notes</h3>
						<ul className="notes">
							{
								notes.filter(({video_id})=>video_id===video._id).map(item=>{
									const {_id,note}=item;
									return(
										<li className="note_card" key={_id}>
											<p>{note}</p>
											<div className="note_btns">
												<button onClick={()=>{
													setUpdateForm(true);
												}}><MdEdit/></button>
												<button onClick={()=>{
													deleteNote(_id);
												}}><MdDelete/></button>
											</div>
											

											{
												updateForm && <div className="modal">
												<div className="modal_wrapper"></div>
													<div className="modal_container">
														<div className="modal_header">
														<button onClick={()=>{
														setUpdateForm(false);
													}}><MdClose/></button>
														</div>
													<div className="modal_body">
													<label htmlFor="title">Edit Notes</label>
													<input onChange={(e)=>{
														e.preventDefault();
														setText(e.target.value);
													}} type="text" id="title" value={text} placeholder={note}/>
													<button className="btn_primary" onClick={()=>{
														updateNotes(text,_id);
														setUpdateForm(false);
														setText('');
													}}>Submit</button>
													</div>
													
													</div>
												</div>
						}
										</li>	
									)
								})
							}
						</ul>
					



						{
												showPlaylistForm && <div className="modal">
												<div className="modal_wrapper"></div>
												<div className="modal_container">
													<div className="modal_header">
													<button onClick={()=>{
														setShowPlaylistForm(false);
													}}><MdClose/></button>
													</div>
													<div className="modal_body">
													<label htmlFor="title">Playlist Name</label>
													<input onChange={(e)=>{
														e.preventDefault();
														setTitle(e.target.value);
													}} type="text" id="title" value={title}/>
													<button className="btn_primary" onClick={handlePlaylist}>Create 					Playlist</button>
													</div>
													
												</div>
											</div>
											}

						{
							showPlaylists && <div className="modal">
								<div className="modal_wrapper"></div>
									<div className="modal_container">
										<div className="modal_header">
										<button onClick={showPlaylist}><MdClose/></button>
										</div>
										<div className="modal_body">
										<h3>Add To Playlist</h3>
										<ul>
										{
											playlist.map(item=>{
												const {_id,name}=item;
													return(
														<li className="playlist_listing" key={_id}>
															<p>{name}</p>
															<button onClick={()=>{
																addToPlaylist(name,video);
																showPlaylist();
															}}>Add</button>
														</li>	
													)
											})
										}
										</ul>
										<button onClick={()=>{
											navigate('/playlist')
										}}>Create New Playlist</button>
										</div>
										
									</div>
								</div>
						}



						{
							showNotes && <div className="modal">
							<div className="modal_wrapper"></div>
							<div className="modal_container">
								<div className="modal_header">
								<button onClick={()=>{
									setShowNotes(false);
								}}><MdClose/></button>
								</div>
								<div className="modal_body">
								<label htmlFor="title">Add Notes</label>
								<input onChange={(e)=>{
									e.preventDefault();
									setText(e.target.value);
								}} type="text" id="title" value={text}/>
								<button className="btn_primary" onClick={()=>{
									addNotes(text,video._id);
									setShowNotes(false);
									setText('');
								}}>Submit</button>
								</div>
								
							</div>
						</div>
						}

						
				
				
				</div>
				<div className="aside">
					<h3>More videos:</h3>
					<ul className="aside_list">
						{
							asideVideos.map(item=>(
								<li className="aside_card" key={item._id}>
									<img  src={item.thumbnail} alt="" className="aside_img" />
									<p >
										{item.title}
										<br />
										<small>{item.creator}</small>
									</p>
								</li>	
							))
						}
					</ul>
				</div>
			


			</div>
		</section>	
	)
}