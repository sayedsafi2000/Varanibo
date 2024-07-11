import { useEffect, useState } from "react";

export const useCommercialRent = () =>{
    const [rent, setRent] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        fetch('Commercialrent.json')
        .then(res => res.json())
        .then(data=>{
            setRent(data);
            setLoading(false)
            });
    },[]);
    return [rent, loading];
}
export default useCommercialRent;