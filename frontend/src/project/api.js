import axios from "axios";

const URL = 'http://localhost:2000';
export const signUp = async (userData) => {
    try {
        return await axios.post(`${URL}/signup`, userData)
    } catch (error) {
        console.log(error);
    }
}
export const logIn = async (userData) => {
    try {
        return await axios.post(`${URL}/login`, userData)
    } catch (error) {
        console.log(error);
    }
}
export const createPost = async (postData) => {
    try {
        return await axios.post(`${URL}/write`, postData)
    } catch (error) {
        console.log(error);
    }
}
export const getAllPost = async (SN) => {
    try {
        return await axios.get(`${URL}/posts`+SN)
    } catch (error) {
        console.log(error);
    }
}
export const getSingelPost = async (id) => {
    try {
        return await axios.get(`${URL}/posts/` + id)
    } catch (error) {
        console.log(error);
    }
}
export const updatePost = async (updateData) => {
    try {
        return await axios.put(`${URL}/posts/` + updateData._id, updateData)
    } catch (error) {
        console.log(error);
    }
}
export const deletePost = async (value ) => {
    console.log(value);
    try {
        return await axios.delete(`${URL}/posts/`+ value._id, {data:{
            user:value
        }}) 
    } catch (error) {
        console.log(error);
    }
}

// export default getArticles = async ()=>{
//     try {
//         return await axios.get(`${URL}/getArticles`);
//     } catch (error) {
//         return error
//     }
// }