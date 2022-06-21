import { useState, useEffect } from "react";


//custom hooks need to start with 'use'
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


     //pass as an argument a function
    //runs on each re-render, after data changes
    //used for fetching data; use for when you want code to run on every re-render
    useEffect(() => {
        fetch(url)
        .then(res => { 
            if(!res.ok){
                throw Error("error, could not fetch data");
            }
            return res.json(); //passes the json into a js object
        })
        .then((data) => {
            console.log(data);
            setData(data);
            setLoading(false);
            setError(null)
        })
        .catch(err => {
            setLoading(false);
            setError(err.message);
            console.log(err.message);
        })
    }, [url]); 
    //pass in url as a dependency so that when the url changes, the function re-runs
    // [] makes sure that the hook only runs the function after the initial render
    //use if only need to run the function once, on the first render

    return {data, loading, error}
}

export default useFetch;