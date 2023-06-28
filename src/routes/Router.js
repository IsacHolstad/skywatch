import {Route, Routes} from "react-router-dom";
import Home from "../views/Home";
import Location from "../views/Location";

function Router() {
    return(
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/" element={<Location/>}/>
            </Routes>

        </>
    )
}
export default Router;