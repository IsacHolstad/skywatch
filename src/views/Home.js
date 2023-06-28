import {useState} from "react";
import {json} from "react-router-dom";
function Home() {
    const [data, setData] = useState('');

    const fetchWeather = () => {
        try{
            let response = fetch( 'https://api.openuv.io/api/v1/forecast?lat=:lat&lng=:lng&alt=:alt&dt=:dt')
            const uvData = response.json()
            console.log(uvData)
        }
        catch (error) {
            console.log(error)
        }

    }
    fetchWeather()



    return (
        <>
        </>
    )
}

export default Home;