
import { request } from "./request";

/**
 * axios get 参数加params,post不加
 * @param {*} form 
 */
export function login(form) {
    return new request(
        {
            url: "/login",
            params: {
                username:form.username,
                password:form.password
            }
        }

    )
}

