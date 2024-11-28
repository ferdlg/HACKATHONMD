import axiosInstance from "../axiosInstances";

export const CityBikersServices = ()=>{
    const getAll = async ()=>{
        try{
            
            const {data} = await  axiosInstance.get('/?fields=id,name,location,stations');
            return data;
        }
         catch (e) {
        throw new Error(e);
        }
    };
    const getByCountry = async (country)=>{
        try{
            
            const response = await  getAll();
            let bikers = []
            response.networks?.map((bike)=>{
                if(bike?.location?.country.includes(country)){
                    bikers.push(bike)
                }
            })
            return bikers;
        }
         catch (e) {
        throw new Error(e);
        }
    };
    // const getStationsByNetwork = async (networkId)=>{
    //     try{
            
    //         const {data} = await axiosInstance.get(networkId);
    //         console.log('Data',data.network.stations)
    //         let networkStations = []
    //         data.network.stations?.map((station)=>{
    //             if(station?.includes(networkId)){
    //                 networkStations.push(station)
    //             }
    //         })

    //         networkStations.map((station)=>{
    //             return{
    //                 id:station.id,
    //                 name:station.name,
    //                 latitude:station.latitude,
    //                 longitude:station.longitude
    //             }
    //         })
    //         return networkStations;
    //     }
    //      catch (e) {
    //     throw new Error(e);
    //     }
    // };
    return {
        getAll,
        getByCountry,
        
    }
}