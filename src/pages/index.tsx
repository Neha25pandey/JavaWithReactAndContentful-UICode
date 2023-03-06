import axios from 'axios'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useInsertionEffect, useRef, useState } from 'react'
import { AllUser } from './allUser'
import { CreateUser } from './createUser'
import { Disclaimer } from './disclaimer'
import { TotalUser } from './totalUser'
import { Locale, USER } from './type'
import { getDisclaimerData } from './utility/contentfulUtility'

export default function Home() {
	const initialUser:USER= {firstName:'',
	lastName:'',
	email:'',
	role:''};

	let [userObj, setUser] =useState(initialUser);
	let[users, setUsers] = useState([]);
	let [noOfUser ,setnoOfUser] = useState(0);
	let [header, setHeader] = useState('');
	let [disclaimer,setDisclaimer] = useState('');
	let [createUser, setCreateUser] = useState('');
	let [totalNo, setTotalNo] = useState('');

 
	const saveUser=(e:any)=>{
    e.preventDefault();
		axios.post('http://localhost:8080/api/addUser',(userObj)).then(res => {
			setnoOfUser(noOfUser+1)
		})
		setUser(initialUser);
		
	}

	const getAllUsers=()=>{
		axios.get('http://localhost:8080/api/listUser').then(res => {
		
			setUsers(res.data);
		})
	
	}

	

	const handleChange= (e:any) =>{
		if(e.target.name === 'firstName')
		userObj.firstName= e.target.value
		if(e.target.name === 'lastName')
		userObj.lastName= e.target.value
	  if(e.target.name === 'email')
			 userObj.email = e.target.value
	 if(e.target.name === 'role')
			 userObj.role = e.target.value

			 setUser(userObj)
	}
	const router = useRouter();
	const locale = router.locale as Locale;
	
	useEffect( ()=>{
	const getDisclaim = async ()=>{
		const getUserPage:any = await  getDisclaimerData(locale);
		setDisclaimer(getUserPage?.items[0]?.disclaimer);
		setCreateUser(getUserPage?.items[0]?.createUser);
		setTotalNo(getUserPage?.items[0]?.totalNo);
		setHeader(getUserPage?.items[0]?.header);
	}
     getDisclaim();

	},[router,locale])
	

  return (
    <>
		
        <h1 className="flex justify-center text-lg font-bold text-[50px] p-9 bg-slate-200 ">
					{header}
					</h1>
					<div className="flex flex-row">
						
					<CreateUser  handleChange={handleChange}  saveUser={saveUser} createUser={createUser} userObj={userObj}  />
					<TotalUser noOfUser={noOfUser} setnoOfUser={setnoOfUser} totalNo={totalNo} getAllUser={getAllUsers}/>
					</div>
					<div className="flex flex-row px-10">
					<Disclaimer disclaimer={disclaimer}/>
					
					</div>
					<div className="flex flex-row px-10">
					{users && users.length >0 && <AllUser users={users}/>}
					
					</div>
					
					
				
    </>
  )
}
