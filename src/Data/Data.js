import axios from "axios";
export const Data=async()=>{
    try{
        const response= await axios.get('http://localhost:8081/api/Journey',{
            headers:{
                'Content-Type':'application/json'
            },
        });
        return response.data;
    }
    catch(error){
        throw new Error(error.message);
    }
}
