import { createContext, useState } from "react";

import {videos} from '../data/videos'

export const ExploreContext=createContext();

export function ExploreContextProvider({children}){

	const [exploreVidoes,setExploreVideos]=useState([]);

	const getExploreVideos=()=>{
		setExploreVideos(videos);
	}

	const searchVideo=(searched_title)=>{
		const filterdVideos=videos.filter(({title})=>title.toLowerCase().includes(searched_title));
		setExploreVideos(filterdVideos);
	}

	const value={exploreVidoes,getExploreVideos,searchVideo};

	return(
		<ExploreContext.Provider value={value}>{children}</ExploreContext.Provider>	
	)
}