
import { Link, useNavigate } from 'react-router-dom';
import { useEffect,useContext } from 'react';


import { Card } from './Card';

import { CategoryContext} from '../../index';

import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome,faCompass,faList,faClock} from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

export function Home(){

	const {allCategories,getCategories,setSelectedCategory}=useContext(CategoryContext)

	const navigate=useNavigate();

	useEffect(()=>{
		getCategories();
	},[])
	return (

		<div className="home_container">
			<ul className="sidebar">
				<li><Link style={{textDecoration:'none'}} to='/'><FontAwesomeIcon icon={faHome} /> Home</Link></li>
				<li><Link to='/explore' style={{textDecoration:'none'}}><FontAwesomeIcon icon={faCompass} />  Explore</Link></li>
				<li><Link to='/playlist' style={{textDecoration:'none'}}><FontAwesomeIcon icon={faList} />  Playlist</Link></li>
				<li><Link  style={{textDecoration:'none'}}><FontAwesomeIcon icon={faClock} /> Watch Later</Link> </li>
			</ul>
			<div className="categories">
				
				<header>Categories</header>
				<ul>
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
		</div>
	
		
	)
}