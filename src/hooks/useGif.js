import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";


export const useGif = (category) => {
    
    const [state, setstate] = useState({
        data:[],
        isLoading:true
    })

    useEffect(() => {
        
        getGifs(category)
            .then( gifs => {
                setstate({
                    data: gifs,
                    isLoading: false
                })
            })

    }, [category])

    return state;
}
