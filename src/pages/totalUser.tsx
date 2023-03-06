import axios from "axios"
import React, { Dispatch, SetStateAction, useEffect } from "react"

type PROPTYPE ={
	noOfUser:number
	setnoOfUser: Dispatch<SetStateAction<number>>
	totalNo: string
	getAllUser:()=>void
}


export const TotalUser = ({noOfUser,setnoOfUser,totalNo,getAllUser}:PROPTYPE)=>{

	useEffect(()=>{
		const getTotalUser=()=>{
			axios.get('http://localhost:8080/api/totalUser').then(res => {
				setnoOfUser(res.data);
			})
		}

		getTotalUser();
	},[])
 return(<div className="outline outline-cyan-400 px-32 py-8 m-12 bg-gray-200 ">
   <h2 className="text-left"> {totalNo}</h2>
   <h1 className="font-extrabold text-[90px]">{noOfUser}</h1>
	 <input type="submit"  value="Show All User" onClick={()=>getAllUser()}
	className="inline-block rounded bg-teal-600 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"/>
	 <div>
		</div>
 </div>)
}