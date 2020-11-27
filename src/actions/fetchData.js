const craftApi = "https://s3-ap-southeast-1.amazonaws.com/he-public-data/beercraft5bac38c.json";

const imageApi = "https://s3-ap-southeast-1.amazonaws.com/he-public-data/beerimages7e0480d.json";

export const fetchDetails = async() =>{ 
       return await fetch(craftApi,{
                headers: {
                    "Content-Type": "application/json",
                },
                method:"GET"
            })  
            .then((res)=>res.json())
            .then((res)=>{ 
                return res
            })
            .catch((e)=>{ 
                console.log(e)
            }) 
}

export const fetchImages = async() =>{
    return await fetch(imageApi,{
        method:"GET"
    }) 
    .then((res)=>res.json())
    .then((res)=>{
        return res
    })
}