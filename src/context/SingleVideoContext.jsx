import { createContext, useState } from "react";

import {videos} from '../data/videos'

export const SingleVideoContext=createContext();

export function SingleVideoContextProvider({children}){

	const [video,setVideo]=useState({});
	const [asideVideos,setAsideVideos]=useState([]);

	const getVideo=(video_id)=>{
		const foundVideo=videos.find(({_id})=>Number(video_id)===_id);
		setVideo(foundVideo);
		setAsideVideos(videos.filter(({category})=>category===foundVideo.category));
	}

	const value={getVideo,video,asideVideos};

	return(
		<SingleVideoContext.Provider value={value}>{children}</SingleVideoContext.Provider>	
	)
}