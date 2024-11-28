import axiosInstance from "./axiosInstance";

export const TouristicAttractionService = () => {
    const getAll = async () => {
        try {
            const { data } = await axiosInstance.get('/TouristicAttraction');
            return data;
        } catch (error) {
            throw new Error(error);
        }
    };

    const getByCityName = async ( name ) =>{
        console.log("name: ", name )
        try {
            const response = await getAll();
            let atractions = []
            response.map((atraction)=>{
                console.log(atraction?.city?.name.includes(name))
                if(atraction?.city?.name.includes(name)){
                    atractions.push(atraction)
                }
               
            })
            return atractions
        } catch (error) {
            throw new Error(error);
        }
    }

    return {
        getAll,
        getByCityName
    }
}


