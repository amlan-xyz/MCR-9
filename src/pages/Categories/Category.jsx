import { useEffect,useContext } from "react"
import { useNavigate } from "react-router-dom";

import { CategoryContext } from "../../index"

import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Card } from "./Card"; 

import './style.css'

export function Categories(){

	const {allCategories,getCategories}=useContext(CategoryContext);

	const navigate=useNavigate();

	useEffect(()=>{
		getCategories();
	},[])

	return (
		<section className="layout">
			<Sidebar />
			<div className="categories">
			<h1 className="header">Categories</h1>
			<ul className="card_list">
				{
					allCategories && allCategories.map(item=>{
						const {_id,thumbnail,category}=item;
						return(
							<li key={_id} onClick={()=>{
								navigate(`/videos/${category}`)
							}}><Card image={thumbnail} title={category} /></li>	
						)
					})
				}
			</ul>
			</div>
			
		</section>	
	)
}