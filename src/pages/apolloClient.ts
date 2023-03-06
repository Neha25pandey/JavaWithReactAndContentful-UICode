import {
	ApolloClient,
	DefaultOptions,
	HttpLink,
	InMemoryCache,
} from '@apollo/client'
//import fetch from 'cross-fetch'
import { CONTENTFUL_URI } from './enviroment'



// const defaultOptions: DefaultOptions = {
// 	watchQuery: {
// 		fetchPolicy: 'no-cache',
// 		errorPolicy: 'ignore',
// 	},
// 	query: {
// 		fetchPolicy: 'no-cache',
// 		errorPolicy: 'all',
// 	},
// }

const client = new ApolloClient({
	cache: new InMemoryCache({ addTypename: false }),
	link: new HttpLink({ uri: CONTENTFUL_URI, fetch }),
})



export default client
