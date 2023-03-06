import { StringDecoder } from "string_decoder";

export type Locale = 'en-US' | 'hi';

export type USER = {
	firstName: string
	lastName: string
	email:string
	role:string
}