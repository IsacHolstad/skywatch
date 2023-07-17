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
            console.log("error here:", error)
        }

    }
    fetchWeather()



    return (
        <>
            <h1>hello i am h1 tag</h1>
            <li>list tag</li>
        </>
    )
}

export default Home;