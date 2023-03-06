import axios from "axios"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
	try{
		console.log(req.body,"----------------------------------------");
		await axios({
			method:req.method,
			url: `http://localhost:8080/api/addUser`,
			data:   JSON.stringify(req.body),
			headers: req.headers,
			validateStatus: function (status) {
				return status >= 200
			},
		})
		 
	 } catch (error) {
			console.error(error)
		}
	}