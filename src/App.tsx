import "./styles/index.scss"
import {Route, Routes} from "react-router-dom";
import {ROUTES} from "./routes/Routes.ts";

function App() {
    return (
        <main className={"bg-system-background"}>
            <Routes>
                {
                    ROUTES.map((route, index) => {
                        const Element = route.component
                        return (
                            <Route key={index} path={route.path} element={<Element/>}/>
                        )
                    })
                }
            </Routes>
        </main>
    )
}

export default App