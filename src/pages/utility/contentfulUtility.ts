import { gql } from "@apollo/client"
import client from "../apolloClient"
import { Locale } from "../type";



export const getDisclaimerData =async (locale:Locale) =>{
	const { data } = await client.query({
		query:  gql`query {
			userPageCollection (locale:"${locale}"){
			 items{
				 disclaimer
				 header
				 createUser
				 totalNo
			 }
		 }
		 }`
	 })
	 return data?.userPageCollection;
}