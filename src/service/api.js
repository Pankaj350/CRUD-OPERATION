import axios from 'axios';

const URL = 'http://localhost:8000';


export const addUser = async (data)=>{

    try{
       return await axios.post(`${URL}/add`,data);
    }
    catch(error){
        console.log('Error while calling add User api',error);
    }
}

export const getUsers = async()=>{
    try{
      return await axios.get(`${URL}/all`);
    }catch(error){
        console.log('Error while calling getUsers API',error);
    }
}

export const getUser =async (id)=>{
    try{
       await axios.get(`${URL}/${id}`); 
    }catch(error){
        console.log('Error while calling api',error)
    }
}