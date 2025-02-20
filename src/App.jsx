import {BrowserRouter, Route, Routes} from "react-router-dom";
import Signup from "./components/Signup.jsx";
import Home from "./components/Home.jsx";
import UserContextProvider from "./context/UserContextProvider.jsx";

function App() {
    return (
        <UserContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                </Routes>
            </BrowserRouter>
        </UserContextProvider>
    )
}

export default App
