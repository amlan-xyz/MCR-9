import { useContext } from "react"
import { useNavigate } from "react-router-dom";

import { Sidebar } from "../../components/Sidebar/Sidebar";
import {Card} from './Card'

import {WatchlaterContext} from '../../index'

import './style.css'

export function WatchLater(){
	const {watchLater}=useContext(WatchlaterContext);
	const navigate=useNavigate();
	return (
		<section className="layout">
			<Sidebar/>
			<div className="watch_later">
				<h1 className="header">Watch Later</h1>
				<ul className="card_list">
				{
					watchLater.map(item=>{
						const {_id}=item;
						return(
							<li key={_id}>
								<Card video={item} />
							</li>	
						)
					})
				}
			</ul>
			</div>
			
		</section>	
	)
}