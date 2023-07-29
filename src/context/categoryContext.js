import {categories} from '../data/category'

import { createContext, useState } from 'react'

export const CategoryContext=createContext();

export function CategoryContextProvider({children}){
	
	const [allCategories,setAllCategories]=useState([]);
	const [selectedCategory,setSelectedCategory]=useState([]);

	const getCategories=()=>{
		setAllCategories(categories);
	}

	const value={getCategories,allCategories,selectedCategory,setSelectedCategory};
	return(
		<CategoryContext.Provider value={value}>
			{children}
		</CategoryContext.Provider>	
	)
}