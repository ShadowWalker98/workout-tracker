import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginGroup from "./components/LoginGroup.jsx";
import Home from "./components/Home.jsx";
import UserContextProvider from "./context/UserContextProvider.jsx";
import Logout from "./components/Logout.jsx";
import SignupGroup from "./components/SignupGroup.jsx";

function App() {
    return (
        <UserContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/login" element={<LoginGroup/>}/>
                    <Route path="/logout" element={<Logout/>}/>
                    <Route path='/signup' element={<SignupGroup/>}/>
                </Routes>
            </BrowserRouter>
        </UserContextProvider>
    )
}

export default App
