import { request } from "./request";


export function getSilderMenu(){
    return new request("/menus")
}