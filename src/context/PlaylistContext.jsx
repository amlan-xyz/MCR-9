import { useState,createContext } from "react";
import {v4 as uuid} from 'uuid'

export const PlaylistContext=createContext();

export function PlaylistContextProvider({children}){
	const [playlist,setPlaylist]=useState([]);
	const [playlistView,setPlaylistView]=useState([]);

	const createPlaylist=(playlist_name)=>{
		const newPlaylist={
			_id:uuid(),
			name:playlist_name,
			videos:[]
		}
		setPlaylist(playlist=>[...playlist,newPlaylist]);
	}

	const removePlaylist=(playlist_name)=>{
		setPlaylist(playlist.filter(({name})=>name!==playlist_name));
	}


	const addToPlaylist=(playlist_name,video)=>{
		const updatedPlaylist=playlist.map(item=>{
			if(item.name===playlist_name){
				item.videos.push(video);		
			}
			return item;
		});
		setPlaylist(updatedPlaylist);
	}

	const removeVideo=(playlist_name,video_id)=>{
		const updatedPlaylist=playlist.map(item=>{
			if(item.name===playlist_name){
				item.videos=item.videos.filter(({_id})=>_id!==video_id);
			}
			return item;
		})
		setPlaylist(updatedPlaylist);
	}

	const getPlaylist=(playlist_id)=>{
		setPlaylistView(playlist.find(({_id})=>_id===playlist_id));
	}

	const value={playlist,createPlaylist,removePlaylist,addToPlaylist,removeVideo,getPlaylist,playlistView};

	return(
		<PlaylistContext.Provider value={value}>{children}</PlaylistContext.Provider>	
	)
}