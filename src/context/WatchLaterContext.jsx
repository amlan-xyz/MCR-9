import { createContext,useState } from "react";

export const WatchlaterContext=createContext();

export function WatchlaterContextProvider({children}){

	const [watchLater,setWatchLater]=useState([]);

	const addToWatchLater=(video)=>{
		setWatchLater(watchLater=>[...watchLater,video])
	}

	const removeFromWatchLater=(video)=>{
		setWatchLater(watchLater.filter(({title})=>title!==video.title));
	}

	const value={watchLater,addToWatchLater,removeFromWatchLater};

	return(
		<WatchlaterContext.Provider value={value}>{children}</WatchlaterContext.Provider>	
	)
}