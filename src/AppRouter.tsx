import {BrowserRouter, Routes, Route} from "react-router";
import {observer} from "mobx-react-lite";
import App from "./App.tsx";
import {Page404} from "./components/404/404.tsx";
import {CocktailDetails} from "./components/cocktails/CocktailDetails.tsx";

export const AppRouter = observer(() => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route path={"/cocktails/:cocktail"} element={<CocktailDetails/>}/>
                </Route>
                <Route path="*" element={<Page404/>} />
            </Routes>

        </BrowserRouter>
    )
})