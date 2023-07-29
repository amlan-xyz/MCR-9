import {videos} from '../data/video'

import { createContext,useState } from "react";

export const VideosContext=createContext();

export function VideosContextProvider({children}){

	const [allVideos,setAllVideos]=useState([]);
	const [singleVideo,setSingleVideo]=useState([]);
	const [randomVideos,setRandomVideos]=useState([]);

	const getVideos=(category_name)=>{
		setAllVideos(videos.filter(({category})=>category===category_name));
	}

	const getSingleVideo=(video_id)=>{
		setSingleVideo(videos.filter(({_id})=>_id==video_id));
	}

	const getRandomVideos=()=>{
		setRandomVideos(videos.filter(({_id})=>_id%2!==0))
		console.log(randomVideos)
	}



	const value={getVideos,allVideos,getSingleVideo,singleVideo,randomVideos,getRandomVideos};

	return (
		<VideosContext.Provider value={value}>
			{children}
		</VideosContext.Provider>	
	)
}

