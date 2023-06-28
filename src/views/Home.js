import {useState} from "react";
function Home() {
    const [data, setData] = useState('');

    const fetchWeather = () => {
        try{
            let response = fetch( 'https://api.openuv.io/api/v1/forecast?lat=:lat&lng=:lng&alt=:alt&dt=:dt')
        }
        catch (error) {
            console.log(error)
        }

    }



    return (
        <>
        </>
    )
}

export default Home;