
import { useNavigate } from 'react-router-dom';
import { useEffect,useContext } from 'react';

import { Card } from './Card';

import { CategoryContext} from '../../index';

import './style.css'

export function Home(){

	const {allCategories,getCategories,setSelectedCategory}=useContext(CategoryContext)

	const navigate=useNavigate();

	useEffect(()=>{
		getCategories();
	},[])
	return (

		<div className="home_container">
			<ul className="sidebar">
				<li>Home</li>
				<li>Explore</li>
				<li>Playlist</li>
				<li>Watch Later</li>
			</ul>
			<ul className="categories">
				{
					allCategories.map(item=>{
						const {_id,thumbnail,src,category}=item;
						return(
							<li onClick={()=>{
								navigate(`/category/${_id}`);
								setSelectedCategory(category);
							}} key={_id}>
								<Card item={item} />
							</li>	
						)
					})
				}
			</ul>
		</div>
	
		
	)
}