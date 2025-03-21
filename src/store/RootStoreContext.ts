import {createContext, useContext} from "react";
import {CocktailStore} from "./CocktailStore.ts";

export const RootStoreContext = createContext<CocktailStore | null>(null)


export const useRootStore = () => {
    const context = useContext(RootStoreContext);
    if (context === null) {
        throw new Error(
            "You have forgotten to wrap your root component with RootStoreProvider"
        );
    }
    return context;
};