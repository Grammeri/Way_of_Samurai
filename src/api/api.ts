import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
               headers: {
            "API-KEY" : "dc0c5af1-39e2-401b-a1db-de5012e4b194"
        }
   })

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&
        count=${pageSize}`)
            .then(response => {
                return response.data
            })
    }
}




