import { createContext, useState } from "react";

import {videos} from '../data/videos'

export const VideosContext=createContext();

export function VideosContextProvider({children}){

	const [allVideos,setAllVideos]=useState([]);

	const getVideos=(selected_category)=>{
		const filteredVideos=videos.filter(({category})=>category===selected_category);
		setAllVideos(filteredVideos);
	}

	const value={getVideos,allVideos};

	return (
		<VideosContext.Provider value={value}>{children}</VideosContext.Provider>	
	)
}