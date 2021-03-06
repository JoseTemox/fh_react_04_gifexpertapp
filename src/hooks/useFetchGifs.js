import { useState,useEffect } from "react"
import { getGifs } from "../helpers/getGif";


export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data:[],
        loading:true
    });

    // useEffect(() => {
    // getGifs( category)
    //     // .then(imgs => setImages(imgs));
    //     .then(setImages);

    // }, [category])

    useEffect( ()=> {
        getGifs( category )
            .then(imgs => {

                // setTimeout(() => {

                    setState({
                        data:imgs,
                        loading:false
                    })

                // }, 3000);
            })

    },[category])


    // setTimeout(() => {
    //     setState({
    //         data:[1,2,3,4],
    //         loading:false
    //     })
    // }, 3000);

    return state;//{data: [], loading: true}

}
