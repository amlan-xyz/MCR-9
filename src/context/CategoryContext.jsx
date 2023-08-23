import { createContext, useState } from "react";

import {categories} from '../data/categories'

export const CategoryContext=createContext();

export function CategoryContextProvider({children}){

	const [allCategories,setAllCategories]=useState([]);

	const getCategories=()=>{
		setAllCategories(categories);
	}

	const value={getCategories,allCategories};

	return (
		<CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>	
	)
}