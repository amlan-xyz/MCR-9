import {Link} from 'react-router-dom'

import { MdHome,MdExplore,MdGrading,MdWatchLater} from "react-icons/md";

import './style.css'

export function Sidebar(){
	return (
		<div className='sidebar'>
			<ul className="sidebar_body">
				<li className="sidebar_item">
					<span className='sidebar_icon'><MdHome/></span>
					<Link className='sidebar_link' to='/'> Home</Link>
				</li>
				<li className="sidebar_item">
					<span className='sidebar_icon'><MdExplore/></span>
					<Link className='sidebar_link' to='/explore'> Explore</Link>
				</li>
				<li className="sidebar_item">
					<span className='sidebar_icon'><MdGrading/></span>
					<Link className='sidebar_link' to='/playlist'> Playlist</Link>
				</li>
				<li className="sidebar_item">
					<span className='sidebar_icon'><MdWatchLater/></span>
					<Link className='sidebar_link' to='/watch-later'> Watch Later</Link>
				</li>
			</ul>
		</div>	
	)
}