import { makeAutoObservable, runInAction } from "mobx"
import { CocktailApi } from "../api/CocktailApi.ts";
import { COCKTAILS } from "../utils/utils.ts";

type CocktailRecipeItem = {
    key: string;
    ingredient: string;
    measure: string;
}

export class CocktailStore {
    cocktails: Cocktail[] = []
    _active: Cocktail | null = null

    constructor() {
        makeAutoObservable(this)
        this.initiateCocktails()

        this._active = this.cocktails[0]
    }

    get active (): null| Cocktail {
        return this._active
    }

    setActive = (name: string)=> {
        const newActive = this.cocktails.find(item => item.name === name) || null
        if (!newActive) throw new Error(`No cocktail with name "${name}"`)
        runInAction(() => {
            this._active = newActive
        })
    }

    hasCocktail = (name: string | undefined) => {
        return this.cocktails.some(item => item.name === name)
    }

    initiateCocktails() {
        for (const cocktailName of Object.keys(COCKTAILS)) {
            this.cocktails.push( new Cocktail(this, cocktailName.toLowerCase()))
        }

    }
}


export class Cocktail {
    name: string = "" // used as id
    drinks: Drink[] = []
    store: CocktailStore | null = null
    cocktailApi
    isLoading = true

    constructor(store: CocktailStore, name: string) {
        makeAutoObservable(this, {
            name: false,
            store: false,
            cocktailApi: false,
        })
        this.store = store
        this.name = name

        this.cocktailApi = new CocktailApi()// Thing that can make server requests.
        this.loadDrinks()
    }

    addDrink(drink: Drink) {
        this.drinks.push(drink)
    }

    loadDrinks() {
        this.isLoading = true
        this.cocktailApi.fetchByName(this.name).then(fetchedDrinks => {
            runInAction(() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                fetchedDrinks.drinks.forEach(drink => {
                    const newDrink = new Drink(this, drink)
                    this.addDrink(newDrink)
                })
                this.isLoading = false
            })

        })
    }
}


export class Drink {
    idDrink: string | null = null
    strDrink = ''
    strCategory = ''
    strAlcoholic = ''
    strGlass = ''
    strInstructions = ''
    strDrinkThumb = ''
    strImageSource = ''
    strIngredient1 = ''
    strIngredient2 = ''
    strIngredient3 = ''
    strIngredient4 = ''
    strIngredient5 = ''
    strIngredient6 = ''
    strIngredient7 = ''
    strIngredient8 = ''
    strIngredient9 = ''
    strIngredient10 = ''
    strIngredient11 = ''
    strIngredient12 = ''
    strIngredient13 = ''
    strIngredient14 = ''
    strIngredient15 = ''
    strMeasure1 = ''
    strMeasure2 = ''
    strMeasure3 = ''
    strMeasure4 = ''
    strMeasure5 = ''
    strMeasure6 = ''
    strMeasure7 = ''
    strMeasure8 = ''
    strMeasure9 = ''
    strMeasure10 = ''
    strMeasure11 = ''
    strMeasure12 = ''
    strMeasure13 = ''
    strMeasure14 = ''
    strMeasure15 = ''


    store: Cocktail | null = null

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    constructor(store: Cocktail, drink) {
        makeAutoObservable(this, {
            idDrink: false,
            store: false,
        })
        this.store = store
        const {
            idDrink,
            strDrink,
            strCategory,
            strAlcoholic,
            strGlass,
            strInstructions,
            strDrinkThumb,
            strImageSource,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
            strIngredient11,
            strIngredient12,
            strIngredient13,
            strIngredient14,
            strIngredient15,
            strMeasure1,
            strMeasure2,
            strMeasure3,
            strMeasure4,
            strMeasure5,
            strMeasure6,
            strMeasure7,
            strMeasure8,
            strMeasure9,
            strMeasure10,
            strMeasure11,
            strMeasure12,
            strMeasure13,
            strMeasure14,
            strMeasure15,
        } = drink

        this.idDrink = idDrink
        this.strDrink = strDrink
        this.strCategory = strCategory
        this.strAlcoholic = strAlcoholic
        this.strGlass = strGlass
        this.strInstructions = strInstructions
        this.strDrinkThumb = strDrinkThumb
        this.strImageSource = strImageSource
        this.strIngredient1 = strIngredient1
        this.strIngredient2 = strIngredient2
        this.strIngredient3 = strIngredient3
        this.strIngredient4 = strIngredient4
        this.strIngredient5 = strIngredient5
        this.strIngredient6 = strIngredient6
        this.strIngredient7 = strIngredient7
        this.strIngredient8 = strIngredient8
        this.strIngredient9 = strIngredient9
        this.strIngredient10 = strIngredient10
        this.strIngredient11 = strIngredient11
        this.strIngredient12 = strIngredient12
        this.strIngredient13 = strIngredient13
        this.strIngredient14 = strIngredient14
        this.strIngredient15 = strIngredient15
        this.strMeasure1 = strMeasure1
        this.strMeasure2 = strMeasure2
        this.strMeasure3 = strMeasure3
        this.strMeasure4 = strMeasure4
        this.strMeasure5 = strMeasure5
        this.strMeasure6 = strMeasure6
        this.strMeasure7 = strMeasure7
        this.strMeasure8 = strMeasure8
        this.strMeasure9 = strMeasure9
        this.strMeasure10 = strMeasure10
        this.strMeasure11 = strMeasure11
        this.strMeasure12  = strMeasure12
        this.strMeasure13 = strMeasure13
        this.strMeasure14 = strMeasure14
        this.strMeasure15 = strMeasure15
    }

    get ingredients () {
        const ingredientMap = new Map()
        const measureMap = new Map()
        for (const entry of Object.entries(this)){
            const [key, value] = entry
            if (key.match(/^strIngredient\d+$/)){
                const resultKey = Number.parseInt(key.replace("strIngredient", ""))
                if (!isNaN(resultKey) && value?.length > 0) ingredientMap.set(resultKey, value)
            }

            if (key.match(/^strMeasure\d+$/)){
                const resultKey = Number.parseInt(key.replace("strMeasure", ""))
                if (!isNaN(resultKey) && value?.length > 0) measureMap.set(resultKey, value)
            }
        }

        const result: CocktailRecipeItem[] = []
        ingredientMap.forEach((value, key) => {
            result.push( {key: key, ingredient: value, measure: measureMap.get(key)})
        })
        return result
    }
}