const SEARCH_API = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';

// export const COCKTALES = {
//     MARGARITA: "margarita",
//     MOJITO: "mojito",
//     A1: "a1",
//     KIR: "kir"
// }
//
// type Cock = typeof COCKTALES[keyof typeof COCKTALES]
//
//

export class CocktailApi {

     async fetchByName(name: string) {

        const url = new URL(SEARCH_API);
        url.searchParams.set('s', name.toLowerCase());

        const data = await fetch(url)

        return data.json()
    }

}


// const api = new CocktailApi()
// api.fetchByName('margarita').then(res => console.log(res))