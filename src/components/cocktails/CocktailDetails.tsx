import {useRootStore} from "../../store/RootStoreContext.ts";
import {observer} from "mobx-react-lite";
import {useParams} from "react-router";
import {BadCocktail} from "./BadCocktail.tsx";
import {DrinkCard} from "../DrinkCard.tsx";

export const CocktailDetails = observer(() => {
    const {active, hasCocktail} = useRootStore()
    const {cocktail} = useParams();

    return hasCocktail(cocktail) ? active?.drinks
        .map(item => <DrinkCard key={item.idDrink} drink={item}/>) : <BadCocktail />
});