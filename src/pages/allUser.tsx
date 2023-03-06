import { USER } from "./type"



export const AllUser = ({users}:any) =>{
	
	return (
		
		
	<div className="flex flex-col mt-6" >
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                            <tr>
                                <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <button className="flex items-center gap-x-3 focus:outline-none">
                                        <span>First Name</span>

                                    </button>
                                </th>

                                <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Last Name
                                </th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Email
                                </th>

																<th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Role
                                </th>

                               
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
												{ users.map((user:USER,index :string) =>{
		
 return (
	user.firstName &&  <tr key={index}>
                                <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                    <div>
                                        <h2 className="font-medium text-gray-800 dark:text-white ">{user.firstName}</h2>
                                    </div>
                                </td>
                                <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
																<h2 className="font-medium text-gray-800 dark:text-white ">{user.lastName}</h2>
                                </td>
                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                   
																		<div className="inline px-3 py-1 text-sm font-normal rounded-full text-gray-400 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                        {user.email}
                                    </div>
                                        <p className="text-gray-500 dark:text-gray-400">Easy way to connect</p>
                                  
                                </td>
																<td className="px-4 py-4 text-sm whitespace-nowrap">
                                   
																		<div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                        {user.role}
                                    </div>
                                    
                                </td>
                                
                               
                            </tr>
														)
													})
												}
														</tbody>
														</table>
														</div>
														</div>
														</div>
														</div>
														

 )
	
	
	
}