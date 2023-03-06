import { getDisclaimerData } from "./utility/contentfulUtility";

type prop={
	disclaimer:string
}
export const Disclaimer=  ({disclaimer}:prop) =>{

	
	return(
		<div>
            {disclaimer}
		</div>
		);
		
	
}