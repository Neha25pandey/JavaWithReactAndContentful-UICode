import axios from "axios"
import React from "react"
import { USER } from "./type"

interface ToggleProps {
	handleChange: (e: React.ChangeEvent<HTMLElement>) => void
	saveUser:(e: React.MouseEvent<HTMLElement>) => void
	createUser: string
	userObj: USER
	}

export const CreateUser = ({handleChange,saveUser,createUser,userObj}:ToggleProps)=>{


	return (
		<div className="px-9 py-8 ">
		<h2>{createUser}</h2>
		<form >
			<div className="grid">
				<div className="grid-flow-row">
  	<label className="grid-cols-1">
    First Name     :  
    <input type="text" id ="firstName" name="firstName" onChange={(e)=>handleChange(e)}   className="grid-flow-row border-gray-300 border-solid border-2 m-4 px-2"/>
		</label>
	<label className="grid-cols-1">
    Last Name    : 
    <input type="text" name="lastName" onChange={(e)=>handleChange(e)}   className="grid-flow-row border-gray-300 border-solid border-2 m-4 px-2"/>
  </label>
	</div>
	
	<div className="grid-flow-row">
  	<label className="grid-cols-1">
    Email                  :  
    <input type="text" name="email" onChange={(e)=>handleChange(e)}   className="grid-flow-row border-gray-300 border-solid border-2 m-4 ml-14 px-2"/>
		</label>
	<label className="grid-cols-1">
    Role    : 
    <input type="text" name="role" onChange={(e)=>handleChange(e)}  className="grid-flow-row border-gray-300 border-solid border-2 m-4 ml-14 px-2"/>
  </label>
	</div>
	
	<div className="grid-flow-row my-4">
  <input type="submit"  value="Submit" onClick={(e)=>saveUser(e)}
	className="inline-block rounded bg-teal-600 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
	
		</input>

		</div>
		</div>
</form>
		</div>
	)
}