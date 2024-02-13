import { commonapi } from "./commonApi"
import { baseURL } from "./serverURL"


export const registerApi=async(user)=>{
    return await commonapi('POST',`${baseURL}/register`,user,"")
}

export const loginApi=async(user)=>{
    return await commonapi('POST',`${baseURL}/login`,user,"")
}

export const getUserApi=async()=>{
    return await commonapi('GET',`${baseURL}/get-users`)
}

export const addBikeApi=async(reqBody,reqHeader)=>{
    return await commonapi('POST',`${baseURL}/add-bike`,reqBody,reqHeader)
}

export const getAllBikes=async()=>{
    return await commonapi('GET',`${baseURL}/get-bikes`)
}

export const addApproved=async(bikeId,reqBody)=>{
    return await commonapi('POST',`${baseURL}/approvedBike/${bikeId}`,reqBody)
}

export const deleteBike = async (bikeId) => {
    return await commonapi('DELETE', `${baseURL}/delete/${bikeId}`, {});
};

export const approvedBikes = async ()=>{
    return await commonapi('GET',`${baseURL}/all-approved/bikes`)
};

export const addToBookedBike = async (bikeId,userId,reqBody,reqHeader)=>{
    return await commonapi('POST',`${baseURL}/bookedBike/${bikeId}/${userId}`,reqBody,reqHeader)
}

// export const approvedBikeById = async (bikeId) => {
//     return await commonapi('GET', `${baseURL}/all-approved/bike/${bikeId}`);
// };

