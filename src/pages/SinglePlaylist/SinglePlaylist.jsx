import {Sidebar} from '../../components/Sidebar/Sidebar'
import {Card} from './Card'
import './style.css'

import {PlaylistContext} from '../../index'
import { useContext } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export function SinglePlaylist(){

	const {getPlaylist,playlistView}=useContext(PlaylistContext);
	
	const {id}=useParams();

	useEffect(()=>{
		getPlaylist(id);
	},[])

	return(
		<section className="layout">
			<Sidebar/>
			<div className="single_playlist">
				<h1 className='header'>{playlistView.name}</h1>
				<ul className=''>
					{
						playlistView.videos.map(item=>{
							const {_id}=item;
							return(
								<li key={_id}>
									<Card video={item} playlistName={playlistView.name} />
								</li>	
							)
						})
					}
				</ul>
			</div>
		</section>	
	)
}