import { commonapi } from "./commonApi"
import { baseURL } from "./serverURL"


export const registerApi=async(user)=>{
    return await commonapi('POST',`${baseURL}/register`,user,"")
}

export const loginApi=async(user)=>{
    return await commonapi('POST',`${baseURL}/login`,user,"")
}

export const adminloginApi=async(user)=>{
    return await commonapi('POST',`${baseURL}/adminlogin`,user,"")
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

export const deleteBookedBike = async (bikeId) => {
    return await commonapi('DELETE', `${baseURL}/delete/bookedBike/${bikeId}`, {});
};

export const approvedBikeById = async (bikeId) => {
    return await commonapi('GET', `${baseURL}/all-approved/bike/${bikeId}`);
};
// to get bikes that are booked by particular user
export const bookedBikesById = async(userId,reqHeader)=>{
    return await commonapi('GET',`${baseURL}/booked/bikes/${userId}`," ",reqHeader)
}

// to get bikes that are posted by particular user
export const AddedBikesById = async(userId,reqHeader)=>{
    return await commonapi('GET',`${baseURL}/added/bikes/${userId}`," ",reqHeader)
}

