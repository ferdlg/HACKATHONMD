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
        try {
            const { data } = getAll() ?? [];
            return data.filter((atraction)=>{
                atraction?.city?.name.includes(name)
            })
        } catch (error) {
            throw new Error(error);
        }
    }

    return {
        getAll,
        getByCityName
    }
}


