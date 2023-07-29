import {createContext,useState} from 'react'

export const PlaylistContext=createContext();

export function PlaylistContextProvider({children}){

	const [playlists,setPlaylists]=useState([]);
	const [viewPlaylist,setViewPlaylist]=useState([]);

	const createPlaylist=(name)=>{
		setPlaylists(playlists=>[...playlists,{
			name:name,
			videos:[],
		}])
	}

	const deletePlaylist=(playlist_name)=>{
		setPlaylists(playlists.filter(({name})=>playlist_name!==name));
	}

	const value={createPlaylist,playlists,deletePlaylist};

	return (
		<PlaylistContext.Provider value={value}>{children}</PlaylistContext.Provider>	
	)
}