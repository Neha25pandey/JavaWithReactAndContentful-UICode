import axios from "axios"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
	try{
		 const data = await axios.get('http://localhost:8080/api/listUser' )
		 console.log("data-------------------------",data)
			res.status(200).json(data)
			console.log(data);
			
	 } catch (error) {
			console.error(error)
		}
	}