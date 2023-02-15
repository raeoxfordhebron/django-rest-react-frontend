import {createBrowserRouter, createRoutesFromElements, Route, Routes} from "react-router-dom"
import App from "./App"

const router = createBrowserRouter(createRoutesFromElements(
    <Routes>
        <Route path="/" element={<App/>}>

        </Route>
    </Routes>
))

export default router