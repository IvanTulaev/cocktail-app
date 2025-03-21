import {COCKTAILS} from "../utils/utils.ts";

const SEARCH_API = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';

export class CocktailApi {

     async fetchByName(name: string) {

        const url = new URL(SEARCH_API);
        url.searchParams.set('s', name.toLowerCase());

        const data = await fetch(url)

         if (!data.ok) return Error ("Something went wrong fetching data.");

        return data.json()
    }

    async fetchAll() {

         return await Promise.all(Object.keys(COCKTAILS).map(key => this.fetchByName(key)))
    }
}