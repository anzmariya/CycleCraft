import { commonapi } from "./commonApi"
import { baseURL } from "./serverURL"


export const registerApi=async(user)=>{
    return await commonapi('POST',`${baseURL}/register`,user,"")
}

export const loginApi=async(user)=>{
    return await commonapi('POST',`${baseURL}/login`,user,"")
}

export const getUserApi=async()=>{
    return await commonapi('GET',`${baseURL}/get-user`)
}

export const addBikeApi=async(reqBody,reqHeader)=>{
    return await commonapi('POST',`${baseURL}/add-bike`,reqBody,reqHeader)
}

export const getAllBikes=async()=>{
    return await commonapi('GET',`${baseURL}/get-bikes`)
}

// export const deleteBikeApi=async(id)=>{
//     return await commonapi('DELETE',`${baseURL}/delete-bike/:id`)
// }