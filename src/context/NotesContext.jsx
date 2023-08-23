import { createContext, useState } from "react";
import {v4 as uuid} from 'uuid'

export const NotesContext=createContext();

export function NotesContextProvider({children}){

	const [notes,setNotes]=useState([]);

	const addNotes=(note,video_id)=>{
		const newNote={
			_id:uuid(),
			note,
			video_id
		}
		setNotes(notes=>[...notes,newNote]);
		console.log(notes);
	}

	const updateNotes=(new_note,note_id)=>{
		console.log(new_note+":"+note_id);
		const updatedNotes=notes.map(item=>{
			if(item._id===note_id){
				item.note=new_note;		
			}
			return item;
		});
		console.log(updatedNotes)
		setNotes(updatedNotes);
	}

	const deleteNote=(note_id)=>{
		setNotes(notes.filter(({_id})=>_id!==note_id));
	}

	const value={addNotes,notes,deleteNote,updateNotes};

	return(
		<NotesContext.Provider value={value}>{children}</NotesContext.Provider>	
	)
}